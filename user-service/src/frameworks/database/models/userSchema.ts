import { Document, Model, Schema, default as mongoose } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  dob: string;
}

interface IUserModel extends Model<IUser> {}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const UserModel: IUserModel = mongoose.model<IUser, IUserModel>('User', userSchema);

export { IUser, IUserModel, UserModel };
