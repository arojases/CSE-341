const express = require("express");
const bodyParser = require("body-parser");
const { ConectionDb } = require("./DB/connection");

const port = process.env.PORT || 8080;
const app = express();
require("dotenv").config();

/* DB CONECTION */
//let db;
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
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));