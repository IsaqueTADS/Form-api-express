import express from "express";
import routes from "./api/send_email.js"; // Importa as rotas do arquivo send_email.js

const app = express();

// Middleware para processar dados de formulários e JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static("./public"));

// Usar as rotas definidas no arquivo send_email.js
app.use("/", routes);

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});
