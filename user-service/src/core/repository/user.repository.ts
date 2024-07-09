import { Model } from 'mongoose';
import { IUser } from '../entity/user.entity';
import { createError } from '../utils/createError';
import { EncryptionService } from '../utils/bcrypt';
import { IUserRepository } from '../interfaces/IUserRepository';
import { IUserDocument } from '../../frameworks/database/models/userSchema';


class UserRepository implements IUserRepository {
  private readonly UserModel: Model<IUserDocument>;
  private readonly encryptionService: EncryptionService;

  constructor(UserModel: Model<IUserDocument>, encryptionService: EncryptionService) {
    this.UserModel = UserModel;
    this.encryptionService = encryptionService;
  }

  async findByUsername(username: string): Promise<IUser | null> {
    const user = await this.UserModel.findOne({ username });
    return user ? (user.toObject() as IUser) : null;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.UserModel.findOne({ email });
    return user ? (user.toObject() as IUser) : null;
  }

  async save(user: IUser): Promise<IUser | null> {
    const createdUser = await this.UserModel.create(user);
    return createdUser ? (createdUser.toObject() as IUser) : null;
  }

  async userVerification(user: IUser): Promise<IUser | null> {
    const { email, password, username } = user;
    let existingUser: IUser | null;

    if (!email) {
      existingUser = await this.findByUsername(username);
    } else {
      existingUser = await this.findByEmail(email);
    }

    if (!existingUser) {
      createError('NOT_FOUND', 'User not found');
    }

    const passwordCheck = await this.encryptionService.comparePasswords(password, existingUser.password);
    if (passwordCheck) {
      return existingUser;
    }
    createError('NOT_FOUND', 'Incorrect password');
  }
}

export default UserRepository;
