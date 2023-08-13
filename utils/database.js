import mongoose from "mongoose";
require("dotenv").config();
let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  // Something is wrong with my .env file. It can't read the variables from there
  // that is why I placed my mongodb string manually.

  try {
    await mongoose.connect(
      "mongodb+srv://yusuffirat:Cluster0.123@cluster0.piybins.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
