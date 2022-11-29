import express from "express";
import { exampleRouter } from "./example.route";
import { statusRouter } from "./status.route";

const AppRouter = express.Router();

AppRouter.use("/", statusRouter);
AppRouter.use("/", exampleRouter);

export { AppRouter };
