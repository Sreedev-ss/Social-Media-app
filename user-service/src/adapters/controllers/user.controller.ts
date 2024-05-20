import { Request, Response } from "express";

import UserValidator from "../validators/user.validator";
import User from "../../core/entity/user.entity";

class UserController {
  private createUser: any;

  constructor(createUser: any) {
    this.createUser = createUser;
  }

  async signup(req: Request, res: Response): Promise<Response> {
    const { username, name, password, email, dob } = req.body;

    const newUser = new User({ id: "", username, name, password, email, dob });

    if (username == undefined || !UserValidator.validateUsername(newUser.username)) {
      return res.status(400).json({ error: "Invalid username" });
    }

    if (!UserValidator.validateEmail(newUser.email)) {
      console.log('hi')
      return res.status(400).json({ error: "Invalid email" });
    }

    if (name == undefined || !UserValidator.validateName(newUser.name)) {
      return res.status(400).json({ error: "Invalid name" });
    }

    if (!UserValidator.validatePassword(newUser.password)) {
      return res.status(400).json({
        error:
          "Password should contain at least one uppercase, one symbol, and minimum 8 characters",
      });
    }

    try {
      const isValidDOB: boolean = await UserValidator.validateDOB(newUser.dob);
      if (!isValidDOB) {
        return res.status(400).json({
          error:
            "Dob is out of bound; it should fall within the range of 13 to 150 years old.",
        });
      }
      const createdUser: User = await this.createUser.execute(newUser);

      return res.status(201).json(createdUser);
    } catch (error: any) {
      if (error.message === "User already exists") {
        return res.status(409).json({ error: "User already exists" });
      }
      return res
        .status(500)
        .json({
          error: error.message ? error.message : "Internal Server Error",
        });
    }
  }


}

export default UserController;
