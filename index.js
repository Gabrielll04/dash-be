import express from "express";
import dotenv from "dotenv";

import v1_interna_routes from "./routes/interna.js";

/* Variáveis de Ambiente */
dotenv.config();

//Configuração Express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Rotas de /v1/interna/
app.use("/v1/interna/", v1_interna_routes);

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor rodando na porta ${PORT}`);
  }
});
