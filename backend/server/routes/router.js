const express= require("express");
const router= express.Router();
const students=require("../models/studentSchema");
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware');


router.post("/crudapp/register",async(req,res)=>{
    const { name,email,address,city,Class,section }=req.body;
    console.log(req.body);
    if( !name || !email || !address || !city  || !Class || !section){
        res.status(422).json({ error: "Please fill in all the required fields" });
    }
        try{
            const preuser=await students.findOne({email:email})
            console.log(preuser);
            if(!preuser){
                const addstudent = new students({name, email, address, city, Class, section});
                await addstudent.save();
                res.status(201).json(addstudent);
                console.log(addstudent);
            }
            else{
                    res.status(422).json("this student is already present");
                };
            
            }catch (error) {
            console.log(error)
            res.status(422).json(error)
            }
    
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const foundStudent = await students.findOne({ email });

        if (foundStudent) {
            if (foundStudent.password === password) {
                // Password matches, generate a JWT token
                const token = jwt.sign({ email: foundStudent.email }, 'your_secret_key');
                

                // Send the token in the response
                res.status(200).json({ token });
               
            } else {
                // Password doesn't match, return an error response
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            // Student not found, return an error response
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        console.log(error);
        // Handle other errors and return an appropriate response
        res.status(500).json({ message: 'An error occurred' });
    }
});


router.get("/getname/:id", async (req, res) => {
    try {
        const { name} = req.params;
        console.log(req.params)
        const studentName = await students.findById(name);
        console.log(studentName);

    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    } 
})
// ...

// This route is protected by JWT token
router.get('/protected-route', verifyToken, async (req, res) => {
    // Access the authenticated user's email from req.email
    const email = req.email;
    res.json({ message: 'Protected route accessed', email });
});

// ...
 


//Signup student


router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, username,email, password, city, Class, section } = req.body;
    if (!name || !username|| !email || !password || !city || !Class || !section) {
        res.status(422).json({ error: "Please fill in all the required fields" });
    }
    try {

        const existinguser = await students.findOne({ email: email })
        console.log(existinguser);

        if (existinguser) {
            res.status(422).json("this student is already present");
        } else {
            const newstudent = new students({
                name, username,email, password, city, Class, section
            });

            await newstudent.save();
            res.status(201).json(newstudent);
            console.log(newstudent);
        }

    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }

})

//get student data
router.get("/getdata", async (req, res) => {

    let page=Number(req.query.page)||1;
    let limit = Number(req.query.limit) ||4 ;
    let skip = (page-1)*limit;
    
    try {
        const studentdata = await students.find().skip(skip).limit(limit);
        const totalCount = await students.countDocuments();
        res.status(201).json({studentdata,nbHits:Math.ceil(totalCount/limit)});
        
    } catch (error) {
        console.log(error)
        res.status(422).json(error)
    }
})


//get student data/pagination


//get individual student data

router.get("/getstudent/:id", async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params)
        const individualstudent= await students.findById(id);
        console.log(individualstudent);
        res.status(200).json(individualstudent);
    }catch(error){
        console.log(error)
        res.status(422).json(error)
    }
})

//Update student data

 router.patch("/updatestudent/:id", async(req,res)=>{
  try {
      const { id } = req.params;

      const updatedstudent= await students.findByIdAndUpdate(id,req.body,{
        new:true
      });

      console.log(updatedstudent);
      res.status(201).json(updatedstudent);
  } catch (error) {
    res.status(422).json(error);
  }
 })

//delete student data
 router.get("/deletestudent/:id", async(req,res)=>{
     try {
         const { id } = req.params;

         const deletestudent = await students.findByIdAndDelete(id);
         console.log(deletestudent);
         res.status(201).json(deletestudent);
     } catch (error) {
         res.status(422).json(error);
     }
 })

module.exports= router;
