const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contacts-controller");
const { schemas } = require("../../models/contacts");

const { validateBody, authenticate } = require("../../middlewares/index");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.put("/:contactId", authenticate, ctrl.updateContactById);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavoriteById
);

router.delete("/:contactId", authenticate, ctrl.removeContact);

module.exports = router;
