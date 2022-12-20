const connect = require('../database/database');
const toolsSchema = require("../models/tools");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');

exports.create = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        var tool = new Tool({
            tool_name:req.body.tool_name,
            tool_description:req.body.tool_description,
            year_acquired:req.body.year_acquired,
            proficiency_level:[],
            attributes:[],
            work_ethics:[],
            work_ethics_desc:[]
        });
        //Come back to the 3 lines of code below later
        tool.proficiency_level.push(req.body.proficiency_level);
        tool.attributes.push(req.body.attributes);
        tool.work_ethics.push(req.body.work_ethics);
        tool.work_ethics_desc.push(req.body.work_ethics_desc);
        return tool.save((err) => {
            if (err) {
                res.send(handleError(err.errors));
            }else{
                res.send(tool);
            }
          });
    }catch(err){
        res.send(err.message)
    }
});

exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        return Tool.findOne({ 
            _id:ObjectId(req.params)
        }).then(async (tool) => {
            if (tool) {
                res.send(tool);
            } else {
                res.send("No Tool Found.");
            }
        });
    }catch(err){
        res.send(err.message);
    }
})
exports.update = (async(req,res)=>{
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
        .then((tool, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200);
                res.send(tool);
            }
        }
    );
    }catch(err){
        res.send(err.message);
    }
})
exports.delete = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Tool = db.model(configure.DB_COLLECTION_4, toolsSchema);
        return await Tool.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((tool, err)=>{
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