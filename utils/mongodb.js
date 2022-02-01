import mongoose from "mongoose";
import dontenv from "dotenv";
dontenv.config();

const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl);

const db = mongoose.connection;

export default db;
