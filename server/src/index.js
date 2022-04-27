require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { exit } = require("process");

const authRouter = require("./router/auth");
const movieRouter = require("./router/movie");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect mongodb

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6bzsr.mongodb.net/mern-movie-app?retryWrites=true&w=majority`
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error.messeage);
    process.exit(1);
  }
};

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/movies", movieRouter);

app.get("/", (req, res) => {
  res.status(400).json({ success: true, messeage: "Hello world!!" });
});

app.listen(PORT, () => console.log(`App listen on port: ${PORT}`));
