import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("conncted to MongoDB!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconncted!");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB disconncted!");
});

app.get("/", (req, res) => {
  res.send("Hello from ExpressJS");
});

app.listen("8800", () => {
  connect();
  console.log("connected to backend!");
});
