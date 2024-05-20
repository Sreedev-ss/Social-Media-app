import { Model } from 'mongoose';

class UserRepository {
  private readonly UserModel: Model<any>;

  constructor(UserModel: Model<any>) {
    this.UserModel = UserModel;
  }

  async findByUsername(username: string): Promise<any> {
    const user = await this.UserModel.findOne({ username });
    return user;
  }

  async save(user: any): Promise<any> {
    const createdUser = await this.UserModel.create(user);
    return createdUser;
  }
}

export default UserRepository;