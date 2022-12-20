const mongoose = require("mongoose");
const usernameValidator = require("../middlewares/user");

const userSchema = new mongoose.Schema({
    first_name: {
        type:String, 
        required:[true, "First name is Required."],
        validate:usernameValidator[0].validator1 ,},
    last_name: {
        type:String, 
        required:[true, "Last name is Required."],
        validate:usernameValidator[0].validator2 ,},
    email: {
        type:String, 
        required:[true, "Email is Required."],
        validate:usernameValidator[0].validator3 ,},
    profile_image: {
        type:String
    },
},
{
  timestamps: true,
});



module.exports = userSchema;