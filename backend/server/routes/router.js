const express= require("express");
const router= express.Router();


// Router.get("/", (req,res) =>{
//     console.log("connect");
// });

router.post("/Register",(req,res)=>{
    console.log(req.body);
})

module.exports= router;