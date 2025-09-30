const express = require("express");


const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    await Category.deleteMany({});
    const categoriesInDB = await Category.insertMany(categories.data);
    res.json(categoriesInDB);
  } catch (err) {
    res.json({ message: "Could not add categories to DB" });
    console.log(err);
  }
});

module.exports = router