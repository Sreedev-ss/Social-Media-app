import { Document, Model, Schema, default as mongoose } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../../../core/entity/user.entity";

interface IUserDocument extends IUser, Document {
  id: string;
};

interface IUserModel extends Model<IUserDocument> { }

const userSchema = new Schema<IUserDocument>(
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

userSchema.pre<IUserDocument>("save", async function (this: IUser, next) {
  const user = this as IUserDocument;
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

userSchema.set('toJSON', {
  transform: (doc, { __v, password, ...rest }, options) => rest
})

const UserModel: IUserModel = mongoose.model<IUserDocument, IUserModel>(
  "User",
  userSchema
);

export { IUserModel, IUserDocument, UserModel };
