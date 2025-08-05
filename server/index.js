const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const weddingsFilePath = path.join(__dirname, "data", "weddings.json");
const guestsFilePath = path.join(__dirname, "data", "guests.json");

// Чтение данных
function readData(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (err) {
    return [];
  }
}

// Запись данных
function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Получить все свадьбы
app.get("/api/weddings", (req, res) => {
  const weddings = readData(weddingsFilePath);
  res.json(weddings);
});

// Создать новую свадьбу
app.post("/api/weddings", (req, res) => {
  const weddings = readData(weddingsFilePath);
  const newWedding = { id: uuidv4(), ...req.body };
  weddings.push(newWedding);
  writeData(weddingsFilePath, weddings);
  res.status(201).json(newWedding);
});

// Получить одну свадьбу по ID
app.get("/api/weddings/:id", (req, res) => {
  const weddings = readData(weddingsFilePath);
  const wedding = weddings.find((w) => w.id === req.params.id);
  if (!wedding) {
    return res.status(404).json({ message: "Wedding not found" });
  }
  res.json(wedding);
});

// Получить всех гостей
app.get("/api/guests", (req, res) => {
  const guests = readData(guestsFilePath);
  res.json(guests);
});

// Добавить гостя
app.post("/api/guests", (req, res) => {
  const guests = readData(guestsFilePath);
  const newGuest = { id: uuidv4(), ...req.body };
  guests.push(newGuest);
  writeData(guestsFilePath, guests);
  res.status(201).json(newGuest);
});

// Привязка к конкретной свадьбе (по ID свадьбы)
app.get("/api/weddings/:id/guests", (req, res) => {
  const guests = readData(guestsFilePath);
  const filtered = guests.filter((guest) => guest.weddingId === req.params.id);
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`✅ Backend работает на порту ${PORT}`);
});
