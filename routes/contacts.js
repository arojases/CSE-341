const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getContacts);
router.get("/:id", contactsController.getContactsById);
router.post("/", contactsController.createContact);
router.put("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.deleteContact);

module.exports = router;