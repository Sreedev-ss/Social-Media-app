var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/frameworks/database.ts
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbURL = process.env.DB_URL;
        if (!dbURL) {
            throw new Error("DB_URL environment variable is not defined");
        }
        yield mongoose.connect(dbURL);
        console.log("Database connected");
    }
    catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
});
export default connectDatabase;
