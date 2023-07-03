import mongoose from "mongoose";
import config from "config";
import { logger } from "./logger";

export const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    const dbConnected = await mongoose.connect(dbUri);
    logger.info("Connected to the database");
    return dbConnected;
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};
