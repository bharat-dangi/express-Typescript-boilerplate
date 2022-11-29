import mongoose from "mongoose";
import { Example } from "../interface/example.data.interface";
import { exampleSchema } from "../schemas/example.data.schemas";

export const ExampleModel = mongoose.model<Example>(
  "ExampleModel",
  exampleSchema
);
