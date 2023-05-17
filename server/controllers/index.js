const userService = require("../services/index");

class UserController {
  async createUser(_req) {
    return await userService.userRegistration(_req);
  }

  async loginUser(_req) {
    return await userService.userLogin(_req);
  }
}

const userController = new UserController();

module.exports = userController;
