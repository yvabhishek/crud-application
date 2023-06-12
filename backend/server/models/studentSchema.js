const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});

const students = new mongoose.model("students", studentSchema);

module.exports= students;