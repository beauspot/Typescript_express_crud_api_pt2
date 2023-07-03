import mongoose from "mongoose";
import config from "config";

export const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  try {
    const dbConnected = await mongoose.connect(dbUri);
    console.log("Connected to the database");
    return dbConnected;
  } catch (error) {
      console.error(error);
      process.exit(1);
  }
};
