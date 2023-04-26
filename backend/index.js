const express = require("express");
const mongoose = require("mongoose");
const recipes = require("./routes/recipes");
require("dotenv").config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use("/recipes", recipes);

async function startServer() {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to MongoDB...");
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  } catch (err) {
    console.error(err.message);
  }
}

startServer();
