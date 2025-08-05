const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Witness работает!");
});

app.post("/api/register", (req, res) => {
  const guest = req.body;
  console.log("Гость зарегистрирован:", guest);
  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер слушает порт ${PORT}`);
});
