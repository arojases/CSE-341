const express = require("express");
const router = express.Router()
;
const { getContacts, getContactsById } = require("../controllers/contacts");

router.get("/", getContacts);
router.get("/:id", getContactsById);

module.exports = router;