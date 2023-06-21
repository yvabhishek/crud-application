const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        require: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required:false
    },
    Class: {
        type: String,
        required: false
    },
    section: {
        type: String,
        required: false
    },
    

});

const students = new mongoose.model("students", studentSchema);

module.exports= students;