const express = require("express");

const carts = require("../models/cartModels");
console.log(carts, "pro");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
    const Product = await carts.find();

    return res.status(200).send(Product);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "something went worng ..try agaig later" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    console.log(req.body);
    const Product = await carts.findById(req.params.id);

    return res.status(200).send(Product);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "something went worng ..try agaig later" });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const Product = await carts.create(req.body);

    return res.status(201).send(Product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.body)
    const Product = await carts.findByIdAndDelete(req.params.id);

    return res.status(201).send(Product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
