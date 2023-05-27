const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts-controller")
const {schemas} = require("../../models/contacts");

const validateBody = require("../../decorators/validateBody");

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/",  validateBody(schemas.addSchema), ctrl.addContact);

router.put("/:contactId", ctrl.updateContactById);

router.patch("/:contactId/favorite", validateBody(schemas.updateFavoriteSchema), ctrl.updateFavoriteById);

router.delete("/:contactId", ctrl.removeContact);



module.exports = router;
