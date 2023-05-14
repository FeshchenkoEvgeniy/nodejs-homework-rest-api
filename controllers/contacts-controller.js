const contactService = require("../models/contacts");

const { HttpError } = require("../helpers/HttpError");
const ctrlWrapper = require("../decorators/ctrlWrapper");


const listContacts = async (req, res) => {
  const result = await contactService.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactService.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contactService.addContact(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactService.updateContactById(contactId, req.body);
  res.json({ message: "Contact changed", result });
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactService.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  updateContactById: ctrlWrapper(updateContactById),
  removeContact: ctrlWrapper(removeContact),
};
