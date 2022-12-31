const connect = require('../database/database');
const toolsSchema = require("../models/tools");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');
const { ObjectId } = require("mongodb");
const redis = require('../redis/redis');

exports.create = (async(req,res)=>{
    /*  #swagger.tags = ['Tools']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        var tool = new Tool({
            tool_name:req.body.tool_name,
            tool_description:req.body.tool_description,
            year_acquired:req.body.year_acquired,
            proficiency_level:req.body.proficiency_level,
            attributes:req.body.attributes,
            work_ethics:req.body.work_ethics,
            work_ethics_desc:req.body.work_ethics_desc
        });
        return tool.save((err) => {
            if (err) {
                res.status(500).send(handleError(err.errors));
            }else{
                res.send("Successfully added Resource!");
            }
          });
    }catch(err){
        res.status(500).send(err.message)
    }
});

exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        var tool = await Tool.findOne({ 
            _id:ObjectId(req.params)
        });
        let cacheEntry =  await redis.get(`tool:${tool}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < tool.length ){
                    redis.set(`tool:${tool}`, JSON.stringify(tool), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`tool:${tool}`, JSON.stringify(tool),'EX', 604_800);
                res.status(200).send([...tool]);
            }
    }catch(err){
        res.status(500).send(err.message);
    }
})
exports.update = (async(req,res)=>{
    /*  #swagger.tags = ['Tools']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        return await Tool.findByIdAndUpdate({ _id: ObjectId(req.params)},
        {$set: {
            tool_name:req.body.tool_name,
            tool_description:req.body.tool_description,
            year_acquired:req.body.year_acquired,
            proficiency_level:[],
            attributes:[],
            work_ethics:[],
            work_ethics_desc:[]}})
        .then((tools, err)=>{
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
    /*  #swagger.tags = ['Tools']  #swagger.ignore = true*/
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        return await Tool.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((tool, err)=>{
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
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        var tool = await Tool.find({});
        let cacheEntry =  await redis.get(`tool:${tool}`);
            if(cacheEntry){
                cacheEntry = JSON.parse(cacheEntry);
                if(cacheEntry.length < tool.length ){
                    redis.set(`tool:${tool}`, JSON.stringify(tool), 'EX', 3600);
                }
                res.send([...cacheEntry]);
            }
            else if(!cacheEntry){
                // education = JSON.parse(education);
                redis.set(`tool:${tool}`, JSON.stringify(tool),'EX', 604_800);
                res.status(200).send([...tool]);
            }
    }catch(e){
        res.status(500).send(e.message);
    }
});