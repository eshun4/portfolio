const connect = require('../database/database');
const projectsSchema = require("../models/projects");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;
const handleError = require('../utilities/handlers');

exports.create = (async(req,res)=>{
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
                res.send(handleError(err.errors));
            }else{
                res.send(project);
            }
          });
    }catch(err){
        res.send(err.message)
    }
})
exports.read = (async(req,res)=>{
    try{
        var db = await connect(); 
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        return Project.findOne({ 
            _id:ObjectId(req.params)
        }).then(async (project) => {
            if (project) {
                res.send(project);
            } else {
                res.send("No Project Found.");
            }
        });
    }catch(err){
        res.send(err.message);
    }
})
exports.update = (async(req,res)=>{
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
        .then((project, err) => {
            if(err){
                res.send(err.message);
            }else{
                res.status(200);
                res.send(project);
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
        var Project = db.model(configure.DB_COLLECTION_3, projectsSchema);
        return await Project.findOneAndDelete({ _id: ObjectId(req.params.id )})
        .then((project, err)=>{
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