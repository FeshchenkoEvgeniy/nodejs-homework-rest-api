const {Schema, model} = require('mongoose');

const handleMongooseError = require('../decorators/handleMongooseError')

const Joi = require("joi");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
}, {versionKey: false, timestamps: true})

const addSchema = Joi.object({
  name: Joi.string().required().messages({
      "any.required": `"name" is required`
  }),
  email: Joi.string().required().messages({
      "any.required": `"author" is required`,
      "string.empty": `"author" cannot be empty`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"phone" is required`,
    "string.empty": `"phone" cannot be empty`,
}),
  favorite: Joi.boolean(),
});

contactSchema.post("save", handleMongooseError);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const schemas = {
  addSchema,
  updateFavoriteSchema,
}

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    schemas,
}