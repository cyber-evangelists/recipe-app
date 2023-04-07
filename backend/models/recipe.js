const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  photo: String,
  title: String,
  description: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
