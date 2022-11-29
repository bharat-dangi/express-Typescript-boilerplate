import express from "express";
import { statusRouter } from "./status.route";

const AppRouter = express.Router();

AppRouter.use("/", statusRouter);

export { AppRouter };
