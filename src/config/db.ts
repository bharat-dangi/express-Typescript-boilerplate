import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  await mongoose.connect(mongoUri!);
  console.log("MongoDb Connected".blue.underline.bold);
};
