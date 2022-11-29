import express from "express";
import { ExampleController } from "../controller/example.controller";

const exampleRouter = express.Router();

exampleRouter.route("/example").get(ExampleController.testExample);

export { exampleRouter };
