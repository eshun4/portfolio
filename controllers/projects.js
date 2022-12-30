const connect = require('../database/database');
const projectsSchema = require("../models/projects");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const redis = require('../redis/redis');
const { ObjectId } = require("mongodb");
exports.create = (async(req,res)=>{
    /*  #swagger.tags = ['Projects']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        var project = new Project({
            project_name:req.body.project_name,
            start_date:req.body.start_date,
            end_date:req.body.end_date,
            requirements:req.body.requirements,
            results:req.body.results,
            accomplishments:req.body.accomplishments,
            tools_used:[]
        });
        project.tools_used.push(req.body.tools_used);
        return project.save((err) => {
            if (err) {
                res.status(500).send(handleError(err.errors));
            }else{
                res.send("Successfully added Resource!");
            }
          });
    }catch(err){
        res.status(500).send(err.message)
    }
})
exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        var project =  await Project.findOne({ 
            _id:ObjectId(req.params)
        })
        let cacheEntry =  await redis.get(`project:${project}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < project.length ){
                    redis.set(`project:${project}`, JSON.stringify(project), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`project:${project}`, JSON.stringify(project),'EX', 604_800);
                res.status(200).send([...project]);
            }
    }catch(err){
        res.status(500).send(err.message);
    }
})
exports.update = (async(req,res)=>{
    /*  #swagger.tags = ['Projects']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        return await Project.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {
            project_name:req.body.project_name,
            start_date:req.body.start_date,
            end_date:req.body.end_date,
            requirements:req.body.requirements,
            results:req.body.results,
            accomplishments:req.body.accomplishments,
            tools_used:[]}})
        .then((project, err)=>{
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
    /*  #swagger.tags = ['Projects']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        return await Project.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((project, err)=>{
            if(err){
                res.status(500).send(err.message);
            }else{
                res.send( "Delete was successful.");
            }
        });
    }catch(err){
        res.status(500).send(err.message);
    }
});

exports.adminGET = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        var project = await Project.find({});
        let cacheEntry =  await redis.get(`project:${project}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < project.length ){
                    redis.set(`project:${project}`, JSON.stringify(project), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`project:${project}`, JSON.stringify(project),'EX', 604_800);
                res.status(200).send([...project]);
            }
    }catch(e){
        res.status(500).send(e.message);
    }
});