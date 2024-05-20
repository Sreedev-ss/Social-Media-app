// src/frameworks/database.ts
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbURL: string = process.env.dbURL;
const db =  mongoose.createConnection(dbURL);
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));

export default db;
