import express from "express";
import "dotenv/config";
import pool from "./db.js";

const app = express();
const PORT = process.env.SERVERPORT || 3000;
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/fruits", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM fruits");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database query failed" });
  }
});

app.get("/fruits/:id", async (req, res) => {
  const fruitId = req.params.id;
  try {
    const [rows] = await pool.execute("SELECT * FROM fruits WHERE id = ?", [
      fruitId,
    ]);
    if (rows.length === 0) {
      res.status(404).json({ error: "404 - Fruit not found" });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: "Database query failed" });
  }
});

app.post("/fruits", async (req, res) => {
  const { name, color, price } = req.body;
  try {
    if (!name || !color || price === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    } else if (typeof price !== "number" || price < 0) {
      return res.status(400).json({ error: "Invalid price value" });
    } else if (
      typeof name !== "string" ||
      typeof color !== "string" ||
      name.trim() === "" ||
      color.trim() === ""
    ) {
      return res.status(400).json({ error: "Invalid name or color value" });
    }
    const [result] = await pool.execute(
      "INSERT INTO fruits (name, color, price) VALUES (?, ?, ?)",
      [name, color, price]
    );
    res.status(201).json({ id: result.insertId, name, color, price });
  } catch (err) {
    res.status(500).json({ error: "Database insertion failed" });
  }
});

app.put("/fruits/:id", async (req, res) => {
  const fruitId = req.params.id;
  const { name, color, price } = req.body;
  try {
    if (!name || !color || price === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    } else if (typeof price !== "number" || price < 0) {
      return res.status(400).json({ error: "Invalid price value" });
    } else if (
      typeof name !== "string" ||
      typeof color !== "string" ||
      name.trim() === "" ||
      color.trim() === ""
    ) {
      return res.status(400).json({ error: "Invalid name or color value" });
    }
    const [result] = await pool.execute(
      "UPDATE fruits SET name = ?, color = ?, price = ? WHERE id = ?",
      [name, color, price, fruitId]
    );
    res.status(200).json({ id: fruitId, name, color, price });
  } catch (err) {
    res.status(500).json({ error: "Database update failed" });
  }
});

app.delete("/fruits/:id", async (req, res) => {
  const fruitId = req.params.id;
  try {
    const [result] = await pool.execute("DELETE FROM fruits WHERE id = ?", [
      fruitId,
    ]);
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Fruit not found" });
    } else {
      res
        .status(200)
        .json({ message: `Successfully deleted fruit with id: ${fruitId}` });
    }
  } catch (err) {
    res.status(500).json({ error: "Database deletion failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/fruits`);
});
