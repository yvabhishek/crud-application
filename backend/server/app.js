require("dotenv").config();
const express = require("express");
const app=express();
const mongoose= require("mongoose");
require("./DB/conn");
require("./models/studentSchema");
const cors= require("cors");
const router=require("./routes/router");
const jwt = require("jsonwebtoken");




app.use(cors());
const port=8003;
app.use(express.json());
app.use(router);




app.listen(port,()=>{
    console.log(`server is started at port number ${port}`);
});
 