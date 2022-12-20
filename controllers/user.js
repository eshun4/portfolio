const connect = require('../database/database');
const userSchema= require("../models/user");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;

exports.signin = (async(req,res)=>{
    try{
        const db = await connect();    
        const User = db.model(configure.DB_COLLECTION_1, userSchema);
        User.findOrCreate({ googleId: req.oidc.user.sid,
            first_name:req.oidc.user.given_name,
            last_name:req.oidc.user.family_name,
            username:req.oidc.user.nickname, 
            email:req.oidc.user.email, 
            profile_image:req.oidc.user.picture,
        }, (err, user) => {
          if(err){
            console.log(err.message);
          }
          res.status(200).redirect('/api_documentation');
        });
    }catch(e){
        res.send(e.message);
    }
});