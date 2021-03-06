const express = require("express");
const conectarDB = require("./config/db");
//crear el servidor
const app = express();

//Conectar a la DB
conectarDB();

// puerto de la app
const PORT = process.env.PORT || 4000;

//Definir la pagina principal
// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

//arrancar la app (servidor)
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
