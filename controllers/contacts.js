const {
  getDb
} = require("../DB/connection");
const {
  ObjectId
} = require("mongodb");

const getContacts = async (req, res) => {
  const db = getDb();
  let clients = [];
  db.collection("contacts")
    .find()
    .forEach((client) => clients.push(client))
    .then(() => {
      res.status(200).send(clients);
    })
    .catch(() => {
      res.status(500).json({
        error: "No ducuments found"
      });
    });
};

const getContactsById = async (req, res) => {
  const db = getDb();
  //let clients = [];
  db.collection("contacts")
    .findOne({
      _id: ObjectId(req.params.id)
    })
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch(() => {
      res.status(500).json({
        error: "Could not fetch the document by id"
      });
    });
};

const createContact = async (req, res) => {

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const db = getDb();
  const result = await db.collection("contacts").insertOne(contact);

  if (result) {
    res.status(201).json(result.error || 'Contact created successfully.');
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
};

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };

  const db = getDb();
  const result = await db.collection('contacts').replaceOne({_id: userId}, contact);

  if (result.modifiedCount > 0) {
    res.status(204).send(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const db = getDb();
  const result = await db.collection('contacts').deleteOne({_id: userId});
  
  if (result.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getContacts,
  getContactsById,
  createContact,
  updateContact,
  deleteContact
};