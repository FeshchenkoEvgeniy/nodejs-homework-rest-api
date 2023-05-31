const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth-controller")
const {schemas} = require('../../models/user')

const validateBody = require("../../decorators/validateBody");

router.post('/register', validateBody(schemas.userRegisterSchema), ctrl.register)

module.exports = router;