import express from "express";
import { exampleRouter } from "./example.route";
import { statusRouter } from "./status.route";

const AppRouter = express.Router();

AppRouter.use("/v1", statusRouter);
AppRouter.use("/v1", exampleRouter);

export { AppRouter };
