const { connect } = require("../middlewares/db.config");
const User = require("../models/User/index");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    connect();
  }

  async userRegistration(_req) {
    const { email, username, password } = _req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = {
      email,
      username,
      password: hash,
    };

    try {
      const savedUser = await User.create(newUser);
      return savedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async userLogin(_req) {
    const { email, password } = _req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return "Invalid username or password";
    }

    const isMatch = bcrypt.compare(password, user.password);

    if (isMatch) {
      return "Login successful";
    } else {
      return "Invalid username or password";
    }
  }
}

const userService = new UserService();
module.exports = userService;
