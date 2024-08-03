import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World!");
});

app.use("/books", booksRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
