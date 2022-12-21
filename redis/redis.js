const redis = require('redis');
const env = require("../utilities/environments_configs");
const configure = env.state.configurations;
const REDIS_PORT = `${configure.REDIS_PORT}`;
const REDIS_URL = `${configure.REDIS_URL}`;

const options = {
    host:REDIS_URL,
    port:REDIS_PORT
};

const client = redis.createClient(options);
client.connect();

client.on("connect", ()=>{
    console.log("Redis connecting to Server.");
});

client.on("ready", ()=>{
    console.log("Redis connection successfully established and ready to use.");
});

client.on("end", ()=>{
    console.log("Redis connection disconnected.");
});

client.on("error", (err)=>{
    console.log(`Error occured at ${err.message}`);
});

client.on("reconnecting", (err)=>{
    console.log("Redis server trying to reconnect");
});

process.on("SIGINT", ()=>{
    client.quit();
});

module.exports = client;