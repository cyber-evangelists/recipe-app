const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipe");

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { photo, title, description } = req.body;

    const newRecipe = new Recipe({
      photo,
      title,
      description,
    });

    await newRecipe.save();
    res.send(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { photo, title, description } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(id, {
      photo,
      title,
      description,
    });

    res.send(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Recipe.findByIdAndDelete(id);

    res.send({ message: "Recipe deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
