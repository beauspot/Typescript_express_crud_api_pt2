import express from "express";
import config from "config";
import { connect } from "../src/utils/connect";

const port = config.get<number>("port");
const app = express();

const startServer = async () => {
  try {
    await connect();
    app.listen(port, () => console.log("Server Started successfully."));
  } catch (error: any) {
    console.log(error.message);
  }
};
startServer();
