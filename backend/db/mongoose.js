import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbPassword = process.env.DB_PASSWORD;

// encode the password
const encodedPassword = encodeURIComponent(dbPassword);
const url = `mongodb+srv://pratikmore408:${encodedPassword}@cluster0.bibaswd.mongodb.net/ChatApp?retryWrites=true&w=majority`;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongodb Database");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoDB;
