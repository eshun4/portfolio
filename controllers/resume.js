const connect = require('../database/database');
const resumeSchema = require("../models/resume");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const redis = require('../redis/redis');

exports.create = (async(req,res)=>{
    /*  #swagger.tags = ['Resume']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Resume = db.model(configure.DB_COLLECTION_6, resumeSchema);
        var resume = new Resume({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            linkedIn_url:req.body.linkedIn_url,
            education:[],
            tools:[],
            work_experience:[],
        });
        //Come back to the 3 lines of code below later
        resume.education.push(req.body.education);
        resume.tools.push(req.body.tools);
        resume.work_experience.push(req.body.work_experience);
        return resume.save((err) => {
            if (err) {
                res.send(handleError(err.errors));
            }else{
                res.send(resume);
            }
          });
    }catch(err){
        res.send(err.message);
    }
})
exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Resume = db.model(configure.DB_COLLECTION_6, resumeSchema);
        var resume = await Resume.findOne({ 
            _id:ObjectId(req.params)
        });
        let cacheEntry =  await redis.get(`resume:${resume}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < resume.length ){
                    redis.set(`resume:${resume}`, JSON.stringify(resume), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`resume:${resume}`, JSON.stringify(resume),'EX', 604_800);
                res.status(200).send([...resume]);
            }
    }catch(err){
        res.send(err.message);
    }
})

exports.update = (async(req,res)=>{
    /*  #swagger.tags = ['Resume']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Resume = db.model(configure.DB_COLLECTION_6, resumeSchema);
        return await Resume.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            linkedIn_url:req.body.linkedIn_url,
            education:[],
            tools:[],
            work_experience:[],}})
        .then((resume, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200).send(resume);
            }
        }
    );
    }catch(err){
        res.send(err.message);
    }
});

exports.delete = (async(req,res)=>{
    /*  #swagger.tags = ['Resume']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Resume = db.model(configure.DB_COLLECTION_6, resumeSchema);
        return await Resume.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((resume, err)=>{
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
        var Resume = db.model(configure.DB_COLLECTION_6, resumeSchema);
        var resume = await Resume.find({});
        let cacheEntry =  await redis.get(`resume:${resume}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < resume.length ){
                    redis.set(`resume:${resume}`, JSON.stringify(resume), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`resume:${resume}`, JSON.stringify(resume),'EX', 604_800);
                res.status(200).send([...resume]);
            }
    }catch(e){
        res.send(e.message);
    }
});