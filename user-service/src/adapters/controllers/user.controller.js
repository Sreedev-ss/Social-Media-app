const User = require("../../core/entity/user.entity");
const UserValidator = require("../validators/user.validator");

class UserController {
  constructor(createUser) {
    this.createUser = createUser;
  }
  /**
   * Handles the signup process for a new user.
   * @param {import('express').Request} req - The request object.
   * @param {import('express').Response} res - The response object.
   */

  async signup(req, res) {
    const { username, name, password, email, age } = req.body;

    const newUser = new User({ username, name, password, email, age });

    if (!UserValidator.validateUsername(username)) {
      return res.status(400).json({ error: "Invalid username" });
    }

    if (!UserValidator.validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }
    
    if (!UserValidator.validateName(name)) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!UserValidator.validatePassword(password)) {
      return res.status(400).json({
        error:
          "Password should contain at least one uppercase, one symbol, and minimum 8 characters",
      });
    }
    const isValidDOB = await UserValidator.validateDOB(dob);
    if (!isValidDOB) {
      return res.status(400).json({ error: "Invalid age" });
    }

    try {
      const createdUser = await this.createUser.execute(newUser);
    } catch (error) {
      if (error.message === "User already exists") {
        return res.status(409).json({ error: "User already exists" });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
