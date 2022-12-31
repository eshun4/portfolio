const mongoose = require("mongoose");
const toolsValidator = require("../middlewares/tools");

const toolsSchema = new mongoose.Schema({
    tool_name: {
        type:String, 
        required:[true, "Tool name is Required."],
        validate:toolsValidator[0].validator1 ,},
    tool_description: {
        type:String, 
        required:[true, "Tool Description is Required."] ,},
    year_acquired: {
        type:String, 
        required:[true, "Year Acquired is Required."],},
    proficiency_level: {
        type:String, 
        required:[true, "Proficiency Level is Required."],},
    proficiency_level: {
        type:String, 
        required:[true, "Attributes is Required."],
        validate:toolsValidator[0].validator5 },
    work_ethics: {
        type:String, 
        required:[true, "Work Ethics is Required."],
        validate:toolsValidator[0].validator6  },
    work_ethics_desc: {
        type:String, 
        required:[true, "Work Ethics Descriprion is Required."],
        validate:toolsValidator[0].validator6  },
},
{
  timestamps: true,
});



module.exports = toolsSchema;