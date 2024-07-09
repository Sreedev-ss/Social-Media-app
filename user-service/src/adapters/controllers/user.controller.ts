import UserValidator from "../validators/user.validator";
import User from "../../core/entity/user.entity";
import { createError } from "../../core/utils/createError";
import { Request, Response } from "express";
import CreateUser from "../../core/useCase/createUser";
import LoginUser from "../../core/useCase/loginUser";
import { generateAccessToken, generateRefreshToken } from "../../core/utils/jwt";
import { IUserDocument } from "../../frameworks/database/models/userSchema";
import { RequestUser } from "../../frameworks/webserver/routes/index.routes";

class UserController {
  private createUser: CreateUser;
  private loginUser: LoginUser;

  constructor(createUser: CreateUser, loginUser: LoginUser) {
    this.createUser = createUser;
    this.loginUser = loginUser;
  }

  async signup(req:RequestUser, res: Response): Promise<any> {
    const { username, name, password, email, dob } = req.body;

    const newUser = new User({ username, name, password, email, dob });

    if (username == undefined || !UserValidator.validateUsername(newUser.username)) {
      createError("BAD_REQUEST", "Invalid username")
    }

    if (!UserValidator.validateEmail(newUser.email)) {
      createError("BAD_REQUEST", "Invalid email");
    }

    if (name == undefined || !UserValidator.validateName(newUser.name)) {
      createError("BAD_REQUEST", "Invalid name");
    }

    if (!UserValidator.validatePassword(newUser.password)) {
      createError("BAD_REQUEST", "Password should contain at least one uppercase, one symbol, and minimum 8 characters");
    }

    try {
      const isValidDOB: boolean = await UserValidator.validateDOB(newUser.dob);
      if (!isValidDOB) {
        createError("BAD_REQUEST", "Dob is out of bound; it should fall within the range of 13 to 150 years old.");
      }

      const createdUser = await this.createUser.execute(newUser);
      const accessToken = generateAccessToken(createdUser as IUserDocument);
      const refreshToken = generateRefreshToken(createdUser as IUserDocument);
      req.user = createdUser;
      res.cookie('refresh-token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      })

      return { token: accessToken };
    } catch (error: any) {
      throw error
    }
  }

  async logUser(req: RequestUser, res: Response): Promise<any> {
    const { email, password, username } = req.body;

    if (!email && !username) {
      createError("BAD_REQUEST", "Email or Username is required");
    }
    if (!password) {
      createError("BAD_REQUEST", "Password is required");
    }

    try {
      let user: object;
      if (email) {
        user = await this.loginUser.execute({ email, password });
      } else if (username) {
        user = await this.loginUser.execute({ username, password });
      }
      if (!user) {
        createError("NOT_FOUND", "User not found or invalid credentials");
      }
      const accessToken = generateAccessToken(user as IUserDocument);
      const refreshToken = generateRefreshToken(user as IUserDocument);

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      })

      return { token: accessToken };
    } catch (error: any) {
      throw error;
    }
  }

  async logoutUser(req:RequestUser, res: Response): Promise<any> {
    try {
      res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      });
      return { message: 'Logged out successfully' }; 
    } catch (error) {
      throw createError('INTERNAL_SERVER_ERROR', 'Failed to logout');
    }
  }

}


export default UserController;
