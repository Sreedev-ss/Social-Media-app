// src/frameworks/database.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDatabase = async (): Promise<void> => {
  try {
    const dbURL: string | undefined = process.env.DB_URL;
    if (!dbURL) {
      throw new Error("DB_URL environment variable is not defined");
    }
    await mongoose.connect(dbURL);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;
