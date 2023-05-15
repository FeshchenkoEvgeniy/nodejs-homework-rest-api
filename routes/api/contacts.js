const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts-controller")
const schemas = require("../../schemas/contact-schemas");

const validateBody = require("../../decorators/validateBody");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/",  validateBody(schemas.movieAddSchema), ctrl.addContact);

router.delete("/:contactId", validateBody(schemas.movieAddSchema), ctrl.removeContact);

router.put("/:contactId", ctrl.updateContactById);

module.exports = router;
