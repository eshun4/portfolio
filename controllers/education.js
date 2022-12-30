const connect = require('../database/database');
const educationSchema = require("../models/education");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const { ObjectId } = require("mongodb");
const client = require('../redis/redis');
const redis = require('../redis/redis');

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
        //Come back to the 3 lines of code below later
        education.talents.push(req.body.talents)
        education.fav_subjects.push(req.body.fav_subjects)
        education.school_clubs.push(req.body.school_clubs)
        await education.save(
            (err) => {
            if (err) {
                res.status(500).send(handleError(err.errors));
            }else{
                res.send("Successfully added Resource");
            }
          });
    }catch(err){
        res.status(500).send(err);
    }
})
exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Education = db.model(configure.DB_COLLECTION_2, educationSchema);
        var education = await Education.findOne({ _id:ObjectId(req.params)});
        let cacheEntry =  await client.get(`user_edu:${education}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry._id == education._id){
                    res.send({...cacheEntry, 'source':'cache'});
                }else{
                    res.send({...education._doc, 'source':'API'});
                }
            }
            else if(!cacheEntry){
                redis.set(`user_edu:${education}`, JSON.stringify(education),'EX', 604_800);
                res.status(200).send({...education._doc, 'source':'API'});
            }
    }catch(err){
        res.status(500).send(err.message);
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
        .then((education, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send( "Update was successful.");
            }
        });
    }catch(err){
        res.status(500).send(err.message);
    }
})

exports.delete = (async(req,res)=>{
    /*  #swagger.tags = ['Education']  #swagger.ignore = true  */
    try{
        var db = await connect(); 
        var Education =db.model(configure.DB_COLLECTION_2, educationSchema);
        await Education.findOneAndDelete({ _id: ObjectId(req.params.id )}).then((education, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send("Delete was successful.");
            }
        });
    }catch(err){
        res.status(500).send(err.message);
    }
});

exports.adminGET = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Education =db.model(configure.DB_COLLECTION_2, educationSchema);
        var education = await Education.find({});
        let cacheEntry =  await client.get(`education:${education}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < education.length ){
                    redis.del(`education`);
                    redis.set(`education:${education}`, JSON.stringify(education), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`education:${education}`, JSON.stringify(education),'EX', 604_800);
                res.status(200).send([...education]);
            }
    }catch(e){
        res.status(500).send(e.message);
    }
});