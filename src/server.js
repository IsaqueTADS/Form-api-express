import express from "express";
import routes from "./api/send_email.js";


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ouvindo a porta ${PORT}`);
  console.log(`http://localhost:3000/`);
});
