const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(cors());
app.use(express.json());

const weddingsFile = "data/weddings.json";
const guestsFile = "data/guests.json";

// ✅ Создание свадьбы
app.post("/api/registerWedding", (req, res) => {
  const id = uuidv4();
  const newWedding = { id, ...req.body };

  let weddings = [];
  if (fs.existsSync(weddingsFile)) {
    weddings = JSON.parse(fs.readFileSync(weddingsFile));
  }

  weddings.push(newWedding);
  fs.writeFileSync(weddingsFile, JSON.stringify(weddings, null, 2));

  res.json({ message: "Свадьба сохранена", weddingId: id });
});

// ✅ Получить свадьбу по ID
app.get("/api/wedding/:id", (req, res) => {
  if (!fs.existsSync(weddingsFile)) return res.status(404).json({ error: "Файл не найден" });

  const weddings = JSON.parse(fs.readFileSync(weddingsFile));
  const wedding = weddings.find(w => w.id === req.params.id);
  if (!wedding) return res.status(404).json({ error: "Свадьба не найдена" });

  res.json(wedding);
});

// ✅ Регистрация гостя
app.post("/api/registerGuest", (req, res) => {
  const newGuest = { id: uuidv4(), ...req.body };

  let guests = [];
  if (fs.existsSync(guestsFile)) {
    guests = JSON.parse(fs.readFileSync(guestsFile));
  }

  guests.push(newGuest);
  fs.writeFileSync(guestsFile, JSON.stringify(guests, null, 2));

  res.json({ message: "Гость зарегистрирован" });
});

app.listen(3001, () => console.log("✅ Backend работает на порту 3001"));
