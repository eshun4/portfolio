const mongoose = require("mongoose");
const env = require('../utilities/environments_configs');
const configure = env.state.configurations;

const URI = `${configure.DB_PREFIX}${configure.DB_USERNAME}:${configure.DB_PASSWORD}${configure.DB_CLUSTER}`;
const dbName = `${configure.DB_NAME}`;

async function connect(){
    const db =  mongoose.connect(URI + "/"+ dbName + "?retryWrites=true", {useNewUrlParser:true});
    console.log('Connected successfully to server');
    return db;
}
 

module.exports = connect;