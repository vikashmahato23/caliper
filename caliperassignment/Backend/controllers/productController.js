const express=require("express");

const products=require("../models/productModel")
console.log(products,"pro")

const router=express.Router();

router.get("/",async (req,res)=>{
    try{
      
      const Product=await products.find()
       
       return res.status(200).send(Product)
    }
    catch(err){
        console.log(err)
        return res
          .status(500)
          .send({ message: "something went worng ..try agaig later" });
    }
    
}
)
router.get("/:id",async (req,res)=>{
    try{
        console.log(req.body)
      const Product=await products.findById(req.params.id)
       
       return res.status(200).send(Product)
    }
    catch(err){
        console.log(err)
        return res
          .status(500)
          .send({ message: "something went worng ..try agaig later" });
    }
    
})
router.post("/",async (req,res)=>{
    try{
       
      const Product = await products.insert(req.body);
      
       return res.status(201).send(Product);
    }
    catch(err){
     
          return res.status(500).send({ message: err.message });
    }
    
}
)

module.exports = router;
