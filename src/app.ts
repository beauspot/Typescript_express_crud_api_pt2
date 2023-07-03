import express from "express";
import config from "config";
import { connect } from "../src/utils/connect";
import { logger } from "./utils/logger";

const port = config.get<number>("port");
const app = express();

const startServer = async () => {
  try {
    await connect();
    app.listen(port, () =>
      logger.info(`Server Started successfully at http://localhost:${port}`)
    );
  } catch (error: any) {
    logger.info(error.message);
  }
};
startServer();
