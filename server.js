require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const { ConectionDb } = require("./DB/connection");

/* DB CONECTION */
let db;
ConectionDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
  } else {
    console.log(`Conection error: ${err}`);
  }
});

/* ROUTES */
app.use("/", require("./routes"));