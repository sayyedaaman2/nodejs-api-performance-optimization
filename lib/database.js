import mongoose from "mongoose";
import { appLogger } from "../util/logger.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    appLogger.info("MongoDB connected");
  } catch (err) {
    appLogger.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};