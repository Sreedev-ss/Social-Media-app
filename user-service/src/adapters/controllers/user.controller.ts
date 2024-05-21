
import UserValidator from "../validators/user.validator";
import User from "../../core/entity/user.entity";
import { createError } from "../../frameworks/utils/createError";
import { Request } from "express";

class UserController {
  private createUser: any;

  constructor(createUser: any) {
    this.createUser = createUser;
  }

  async signup(req: Request): Promise<any> {
    const { username, name, password, email, dob } = req.body;

    const newUser = new User({ username, name, password, email, dob });

    if (username == undefined || !UserValidator.validateUsername(newUser.username)) {
      createError(400, "Invalid username")
    }

    if (!UserValidator.validateEmail(newUser.email)) {
      createError(400, "Invalid email");
    }

    if (name == undefined || !UserValidator.validateName(newUser.name)) {
      createError(400, "Invalid name");
    }

    if (!UserValidator.validatePassword(newUser.password)) {
      createError(400, "Password should contain at least one uppercase, one symbol, and minimum 8 characters");
    }

    try {
      const isValidDOB: boolean = await UserValidator.validateDOB(newUser.dob);
      if (!isValidDOB) {
        createError(400, "Dob is out of bound; it should fall within the range of 13 to 150 years old.");
      }
      const createdUser: User = await this.createUser.execute(newUser);
      return createdUser;
    } catch (error: any) {
      throw error

    }
  }

}

export default UserController;
