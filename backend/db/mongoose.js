import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongodb Database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
