const mongoose = require('mongoose')
const resumeSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Mobile : {
        type : Number,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Github : {
        type : String,
        required : true
    },
    Linkedin : {
        type : String,
        required : true
    },
    Objective : {
        type : String,
        required : true
    },
    Education : {
        type : String,
        required : true
    },
    Projects : {
        type : String,
        required : true
    },
    TechnicalSkills : {
        type : String,
        required : true
    },
    Strengths : {
        type : String,
        required : true
    },
    Certifications : {
        type : String,
        required : true
    },
    Hobbies : {
        type : String,
        required : true
    },
    FatherName : {
        type : String,
        required : true
    },
    DateOfBirth : {
        type : String,
        required : true
    },
    Nationality : {
        type : String,
        required : true
    },
    Religion : {
        type : String,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Address : {
        type : String,
        required : true
    }

})
const resume = mongoose.model('resume',resumeSchema)
module.exports = resume
