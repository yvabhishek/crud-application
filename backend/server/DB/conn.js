const mongoose=require("mongoose");

const DB = "mongodb+srv://raoabhishek3105:KJKSXY@cluster0.agojwy2.mongodb.net/school?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(" Connection Success");
}).catch((error)=>{
    console.log(error.message);
});