import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.type("text").send("OK - Servicio X (raíz)");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "hola-servicio-x" });
});

app.get("/api/frase", (req, res) => {
  const frases = [
    "Servicio X dice: ¡Hola Mundo!",
    "Microservicio activo ✅",
    "Backend modular: una URL por componente 🌐",
    "Probado desde cualquier lado (browser/curl/Postman)"
  ];
  const pick = frases[Math.floor(Math.random() * frases.length)];
  res.json({ mensaje: pick, endpoint: "/api/frase", timestamp: new Date().toISOString() });
});

app.listen(PORT, HOST, () => {
  console.log(`Servicio X escuchando en http://${HOST}:${PORT}`);
});