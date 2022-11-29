import mongoose, { Document, Schema } from "mongoose";
import { Example } from "../interface/example.data.interface";

export const exampleSchema = new Schema<Example>(
  {
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);
