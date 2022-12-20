const mongoose = require("mongoose");
const resumeValidator = require("../middlewares/education");
const env = require("../utilities/environments_configs");
const configure = env.state.configurations;


const resumeSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:[true, "Name name is Required."],
        validate:resumeValidator[0].validator1 ,},
    phone: {
        type:Number, 
        required:[true, "Phone Date is Required."],
        validate:resumeValidator[0].validator2 ,},
    email: {
        type:String, 
        required:[true, "Email is Required."],
        validate:resumeValidator[0].validator3 ,},
    linkedIn_url: {
        type:String, 
        required:[true, "LinkedIn URL is Required."],
        validate:resumeValidator[0].validator4 ,},
    education: [{
        type:mongoose.Types.ObjectId, 
        ref:configure.DB_COLLECTION_2, }],
    tools: [{
        type:mongoose.Types.ObjectId, 
        ref:configure.DB_COLLECTION_4, }],
    work_experience: [{
        type:mongoose.Types.ObjectId, 
        ref:configure.DB_COLLECTION_5, }],
},
{
  timestamps: true,
});



module.exports = resumeSchema;