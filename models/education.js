const mongoose = require("mongoose");
const educationValidator = require("../middlewares/education");

const educationSchema = new mongoose.Schema({
    school_name: {
        type:String, 
        required:[true, "School name is Required."],
        validate:educationValidator[0].validator1 ,},
    start_year: {
        type:String, 
        required:[true, "Start Year is Required."],
        validate:educationValidator[0].validator2 ,},
    end_year: {
        type:String, 
        required:[true, "End Year is Required."],},
    course: {
        type:String, 
        required:[true, "Course is Required."],},
    accomplishments: {
        type:String, 
        required:[true, "Accomplishments is Required."],
        validate:educationValidator[0].validator5 ,},
    course_description: {
        type:String, 
        required:[true, "Course description is Required."],
        validate:educationValidator[0].validator6 ,},
    talents: {type:String,
            required:[true, "Talents is Required."],
             validate:educationValidator[0].validator7
    },
    fav_subjects: {type:String,
        required:[true, "Favorite Subjects is Required."],
         validate:educationValidator[0].validator8
    },
    school_clubs: {type:String,
        required:[true, "School Clubs is Required."],
         validate:educationValidator[0].validator9
    },
    graduated: {
        type:Boolean, 
        required:[true, "Boolean is Required."] ,},
    gpa: {
        type:String, 
        required:[true, "G.P.A is Required."],
    },
},
{
  timestamps: true,
},);



module.exports = educationSchema;