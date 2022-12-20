const mongoose = require("mongoose");
const toolsValidator = require("../middlewares/education");

const toolsSchema = new mongoose.Schema({
    tool_name: {
        type:String, 
        required:[true, "Tool name is Required."],
        validate:toolsValidator[0].validator1 ,},
    tool_description: {
        type:Date, 
        required:[true, "Start Date is Required."],
        validate:toolsValidator[0].validator2 ,},
    year_acquired: {
        type:String, 
        required:[true, "Year Acquired is Required."],
        validate:toolsValidator[0].validator3 ,},
    proficiency_level: [{
        type:String, 
        required:[true, "Proficiency is Required."],
        validate:toolsValidator[0].validator4 ,},],
    attributes: [{
        type:String, 
        required:[true, "Attributes is Required."],
        validate:toolsValidator[0].validator5 ,},],
    work_ethics: [{
        type:String, 
        required:[true, "Work Ethics is Required."],
        validate:toolsValidator[0].validator6 ,},],
    work_ethics_desc: [{
        type:String, 
        required:[true, "Work Ethics Description is Required."],
        validate:toolsValidator[0].validator7 ,},],
},
{
  timestamps: true,
});



module.exports = toolsSchema;