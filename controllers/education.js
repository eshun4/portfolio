const connect = require('../database/database');
const educationSchema = require("../models/education");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const { ObjectId } = require("mongodb");
const client = require('../redis/redis');

exports.create = (async(req,res)=>{
    /*  #swagger.tags = ['Education']  #swagger.ignore = true  */
    try{
        var db = await connect(); 
        var Education = db.model(configure.DB_COLLECTION_2, educationSchema);
        var education = new Education({
            school_name:req.body.school_name,
            start_year:req.body.start_year,
            end_year:req.body.end_year,
            course:req.body.course,
            accomplishments:req.body.accomplishments,
            course_description:req.body.course_description,
            talents:[],
            fav_subjects:[],
            school_clubs:[],
            graduated:req.body.graduated,
            gpa:req.body.gpa
        });
        const obj = req.body;;
        //Come back to the 3 lines of code below later
        education.talents.push(req.body.talents)
        education.fav_subjects.push(req.body.fav_subjects)
        education.school_clubs.push(req.body.school_clubs)
        return education.save((err) => {
            if (err) {
                res.send(handleError(err.errors));
            }else{
                res.send(education);
            }
          });
    }catch(err){
        res.send(err);
    }
})
exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Education = db.model(configure.DB_COLLECTION_2, educationSchema);
        return Education.findOne({ 
            _id:ObjectId(req.params)
        }).then(async (education) => {
            if (education) {
                res.send(education);
            } else {
                res.send("No Education Found.");
            }
        });
    }catch(err){
        res.send(err.message);
    }
})
exports.update = (async(req,res)=>{
     /*  #swagger.tags = ['Education']  #swagger.ignore = true  */
    try{
        var db = await connect(); 
        var Education = db.model(configure.DB_COLLECTION_2, educationSchema);
        return await Education.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {
            school_name:req.body.school_name,
            start_year:req.body.start_year,
            end_year:req.body.end_year,
            course:req.body.course,
            accomplishments:req.body.accomplishments,
            course_description:req.body.course_description,
            talents:[],
            fav_subjects:[],
            school_clubs:[],
            graduated:req.body.graduated,
            gpa:req.body.gpa}})
        .then((education, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200);
                res.send(education);
            }
        }
    );
    }catch(err){
        res.send(err.message);
    }
})

exports.delete = (async(req,res)=>{
    /*  #swagger.tags = ['Education']  #swagger.ignore = true  */
    try{
        var db = await connect(); 
        var Education =db.model(configure.DB_COLLECTION_2, educationSchema);
        return await Education.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((education, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send({message: "Delete was successful."});
            }
        });
    }catch(err){
        res.send(err.message);
    }
});

exports.adminGET = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Education =db.model(configure.DB_COLLECTION_2, educationSchema);
        Education.find({}, (err, education)=>{
            if(err){
                res.send(err.message);
            }else{
                res.send(education);
            }
        });
    }catch(e){
        res.send(e.message);
    }
});