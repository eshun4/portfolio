const mongoose = require("mongoose");
const experienceValidator = require("../middlewares/experience");

const experienceSchema = new mongoose.Schema({
    company: {
        type:String, 
        required:[true, "Company is Required."],
        validate:experienceValidator[0].validator1 ,},
    job_title: {
        type:String, 
        required:[true, "Job Title is Required."],
        validate:experienceValidator[0].validator2 ,},
    start_date: {
        type:String, 
        required:[true, "Start Date is Required."],
        validate:experienceValidator[0].validator3 ,},
    end_date: {
        type:String, 
        required:[true, "End Date is Required."],
        validate:experienceValidator[0].validator4 ,},
    status: {
        type:Boolean,
        required:[true, "Status is Required."],},
    location: {
        type:String, 
        required:[true, "Location is Required."],
        validate:experienceValidator[0].validator6 ,},
    job_requirements: {
        type:String, 
        required:[true, "Job Requirements is Required."],
        validate:experienceValidator[0].validator7 ,},
    type:{
            type:String, 
            required:[true, "Type is Required."],
            validate:experienceValidator[0].validator8 ,},
    
},
{
  timestamps: true,
});



module.exports = experienceSchema;