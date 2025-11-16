# Fruits API

A RESTful API for managing fruits with MySQL database integration.

## Description

This project provides a simple Express.js API to perform CRUD operations on a fruits database. The data includes Hungarian fruit names with their colors and prices.

## Features

- **GET** `/fruits` - Retrieve all fruits
- **GET** `/fruits/:id` - Retrieve a specific fruit by ID
- **POST** `/fruits` - Add a new fruit
- **PUT** `/fruits/:id` - Update an existing fruit
- **DELETE** `/fruits/:id` - Delete a fruit

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ItsMeHaxMaster/fruits.git
   cd fruits
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   HOST=localhost
   USER=root
   PASSWORD=your_password
   DATABASE=fruits
   PORT=3306
   SERVERPORT=3000
   ```

4. Set up the database:
   ```bash
   mysql -u root -p < fruits.sql
   ```

## Usage

Start the server:

```bash
node index.js
```

Or use watch mode for development:

```bash
node --watch index.js
```

The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Get All Fruits

```http
GET /fruits
```

### Get Fruit by ID

```http
GET /fruits/:id
```

### Create New Fruit

```http
POST /fruits
Content-Type: application/json

{
  "name": "Alma",
  "color": "Piros",
  "price": 250.50
}
```

### Update Fruit

```http
PUT /fruits/:id
Content-Type: application/json

{
  "name": "Alma",
  "color": "Zöld",
  "price": 280.00
}
```

### Delete Fruit

```http
DELETE /fruits/:id
```

## Database Schema

The `fruits` table contains the following columns:

- `id` - INT (Primary Key, Auto Increment)
- `name` - VARCHAR(100) - Fruit name
- `color` - VARCHAR(50) - Fruit color
- `price` - DECIMAL(5,2) - Fruit price

## Technologies Used

- **Express.js** - Web framework
- **MySQL2** - MySQL client for Node.js
- **dotenv** - Environment variable management

## Project Structure

```
fruits/
├── db.js           # Database connection configuration
├── index.js        # Main application file with API routes
├── fruits.sql      # Database schema and sample data
├── package.json    # Project dependencies
├── .env            # Environment variables (not tracked)
└── README.md       # Project documentation
```

## License

ISC
