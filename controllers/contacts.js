const { getDb } = require("../DB/connection");
const { ObjectId } = require("mongodb");

const getContacts = (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("contacts")
    .find()
    .forEach((client) => clients.push(client))
    .then(() => {
      res.status(200).send(clients);
    })
    .catch(() => {
      res.status(500).json({ error: "No ducuments found" });
    });
};

const getContactsById = (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("contacts")
    .findOne({ _id: ObjectId(req.params.id) })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the document by id" });
    });
};

module.exports = { getContacts, getContactsById };