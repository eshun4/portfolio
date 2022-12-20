const mongoose = require("mongoose");
const projectsValidator = require("../middlewares/education");

const projectsSchema = new mongoose.Schema({
    project_name: {
        type:String, 
        required:[true, "School name is Required."],
        validate:projectsValidator[0].validator1 ,},
    start_date: {
        type:Date, 
        required:[true, "Start Date is Required."],
        validate:projectsValidator[0].validator2 ,},
    end_date: {
        type:Date, 
        required:[true, "End Date is Required."],
        validate:projectsValidator[0].validator3 ,},
    requirements: {
        type:String, 
        required:[true, "Requirements is Required."],
        validate:projectsValidator[0].validator4 ,},
    results: {
        type:String, 
        required:[true, "Results is Required."],
        validate:projectsValidator[0].validator5 ,},
    accomplishments: {
        type:String, 
        required:[true, "Accomplishments is Required."],
        validate:projectsValidator[0].validator6 ,},
    tools_used: [{
        type:String, 
        required:[true, "Tools is Required."],
        validate:projectsValidator[0].validator7 ,},],
},
{
  timestamps: true,
});



module.exports = projectsSchema;