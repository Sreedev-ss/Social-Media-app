import mongoose from "mongoose";

const connectDatabase = async (): Promise<void> => {
  
  try {
    const dbURL: string = process.env.dbURL;
    await mongoose.connect(dbURL);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDatabase;