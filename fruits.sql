-- Create database with UTF-8 encoding
CREATE DATABASE IF NOT EXISTS fruits
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Use the database
USE fruits;

-- Create fruits table with UTF-8 encoding
CREATE TABLE IF NOT EXISTS fruits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    color VARCHAR(50),
    price DECIMAL(5,2)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insert sample fruits
INSERT INTO fruits (name, color, price) VALUES
('Alma', 'Piros', 250.50),
('Banán', 'Sárga', 180.00),
('Narancs', 'Narancssárga', 320.75),
('Szőlő', 'Zöld', 450.00),
('Eper', 'Piros', 890.99),
('Körte', 'Zöld', 280.00),
('Barack', 'Narancssárga', 420.50),
('Szilva', 'Lila', 350.00),
('Cseresznye', 'Piros', 1200.00),
('Kiwi', 'Zöld', 380.25);
