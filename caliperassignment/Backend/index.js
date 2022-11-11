const express=require("express");
const dotenv= require ("dotenv")
const cors=require("cors")
require("dotenv/config");
const connect=require("./configs/db")
const app=express()
const productController=require("./controllers/productController")
const cartController=require("./controllers/cartController")
app.use(express.json());
app.use(cors());
app.use("/products", productController);
app.use("/carts", cartController);
dotenv.config();
const PORT = 5000;
app.listen(PORT, async function () {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.error(err.message);
  }
});