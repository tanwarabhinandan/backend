import { config } from "dotenv";
import mongoose from "mongoose";

config();

const mongoDbUri = process.env.MONGO_DB_URI;


const connectDb = async () => {
  await mongoose.connect(`${mongoDbUri}/blog`);
//   console.log(`MongoDB URI-->>> ${mongoDbUri}/blog`);
  console.log("Connection Successful with DB");
};

export default connectDb;
