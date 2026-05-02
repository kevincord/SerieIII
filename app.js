const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Kevin Alexander Cordón García</h1>");
});

app.listen(port, () => {
  console.log("Servidor corriendo en puerto " + port);
});
