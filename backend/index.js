const express = require("express");
const mongoose = require("mongoose");
const recipes = require('./routes/recipes')

const DATABASE =
  "mongodb+srv://Junaid648:Juni%408808@recipe-app.5rhnbbe.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 8000;

mongoose.connect(DATABASE)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error(err.message));

const app = express();
app.use(express.json());
app.use('/recipes',recipes);
app.listen(port, () => console.log(`Listening on port ${port}...`));