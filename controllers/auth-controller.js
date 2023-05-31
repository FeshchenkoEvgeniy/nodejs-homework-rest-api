const HttpError = require("../helpers/HttpError");
const ctrlWrapper = require("../decorators/ctrlWrapper");

const {User} = require('../models/user')

const register = async (req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        throw HttpError(409, "Email already exist");
    }

    // const hashPassword = await bcrypt.hash(password, 10);

    const result = await User.create(req.body);

    res.status(201).json({
        name: result.name,
        email: result.email,
    })
}

module.exports = {
    register: ctrlWrapper(register)
}