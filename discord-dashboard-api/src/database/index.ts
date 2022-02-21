import mongoose from "mongoose";
import { config } from "dotenv";
config();

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));
