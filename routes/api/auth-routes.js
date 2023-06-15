const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/auth-controller");
const { schemas } = require("../../models/user");

const { validateBody, authenticate } = require("../../middlewares/index");

router.post("/register", validateBody(schemas.checkUserSchema), ctrl.register);

router.post("/login", validateBody(schemas.checkUserSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
