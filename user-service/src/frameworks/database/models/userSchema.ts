import { Document, Model, Schema, default as mongoose } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
  dob: string;
}

interface IUserModel extends Model<IUser> {}

const userSchema = new Schema<IUser>(
  {
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
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUser>("save", async function (this: IUser, next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const UserModel: IUserModel = mongoose.model<IUser, IUserModel>(
  "User",
  userSchema
);

export { IUser, IUserModel, UserModel };
