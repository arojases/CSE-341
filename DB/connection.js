const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.DB_URI;
let dbConection;

const ConectionDb = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      dbConection = client.db("MongoWithNode");
      return cb();
    })
    .catch((err) => {
      return cb(err);
    });
};

const getDb = () => dbConection;

module.exports = { ConectionDb, getDb };