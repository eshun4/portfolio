const connect = require('../database/database');
const experienceSchema = require("../models/experience");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const redis = require('../redis/redis');

exports.create = (async(req,res)=>{
    /*  #swagger.tags = ['Experience']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Experience = db.model(configure.DB_COLLECTION_5, experienceSchema);
        var experience = new Experience({
            company:req.body.company,
            job_title:req.body.job_title,
            start_date:req.body.start_date,
            end_date:[],
            status:req.body.status,
            location:[],
            job_requirements:[],
            type:[]
        });
        //Come back to the 3 lines of code below later
        experience.end_date.push(req.body.end_date);
        experience.location.push(req.body.location);
        experience.job_requirements.push(req.body.job_requirements);
        experience.type.push(req.body.type);
        return experience.save((err) => {
            if (err) {
                res.send(handleError(err.errors));
            }else{
                res.send(experience);
            }
          });
    }catch(err){
        res.send(err.message);
    }
});

exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Experience = db.model(configure.DB_COLLECTION_5, experienceSchema);
        var experience = await Experience.findOne({ 
            _id:ObjectId(req.params)
        });
        let cacheEntry =  await redis.get(`experience:${experience}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < experience.length ){
                    redis.set(`experience:${experience}`, JSON.stringify(experience), 'EX', 3600);
                }
                res.send({...cacheEntry, 'source':'cache'});
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`experience:${experience}`, JSON.stringify(experience),'EX', 604_800);
                res.status(200).send({...experience, 'source':'API'});
            }
    }catch(err){
        res.send(err.message);
    }
})
exports.update = (async(req,res)=>{
    /*  #swagger.tags = ['Experience']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Experience = db.model(configure.DB_COLLECTION_5, experienceSchema);
        return await Experience.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {
            company:req.body.company,
            job_title:req.body.job_title,
            start_date:req.body.start_date,
            end_date:[],
            status:req.body.status,
            location:[],
            job_requirements:[],
            type:[]}})
        .then((experience, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200).send(experience);
            }
        }
    );
    }catch(err){
        res.send(err.message);
    }
})
exports.delete = (async(req,res)=>{
    /*  #swagger.tags = ['Experience']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Experience = db.model(configure.DB_COLLECTION_5, experienceSchema);
        return await Experience.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((experience, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send({message: "Delete was successful."});
            }
        });
    }catch(err){
        res.send(err.message);
    }
})


exports.adminGET = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Experience = db.model(configure.DB_COLLECTION_5, experienceSchema);
        var experience = await Experience.find({});
        let cacheEntry =  await redis.get(`experience:${experience}`);
        if(cacheEntry){
            cacheEntry = JSON.parse(cacheEntry);
            if(cacheEntry.length < experience.length ){
                redis.set(`experience:${experience}`, JSON.stringify(experience), 'EX', 3600);
            }
            res.send({...cacheEntry, 'source':'cache'});
        }
        else if(!cacheEntry){
            // education = JSON.parse(education);
            redis.set(`experience:${experience}`, JSON.stringify(experience),'EX', 604_800);
            res.status(200).send({...experience, 'source':'API'});
        }
    }catch(e){
        res.send(e.message);
    }
});