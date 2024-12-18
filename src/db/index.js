import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect = async () => {
  try {
    const connectionInstance =await  mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connectionInstance,"connectionInstance")

    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Failed To Connect Db", error);
    process.exit(1);
  }
};

export default dbConnect;
