const env = require("../utilities/environments_configs");
const configure = env.state.configurations;
const REDIS_PORT = `${configure.REDIS_PORT}`;
const REDIS_URL = `${configure.REDIS_URL}`
const REDIS_PASSWORD = `${configure.REDIS_PASSWORD}`;


const Redis = require('ioredis');
const fs = require('fs');
const options = {
    host:REDIS_URL,
    port:REDIS_PORT,
    password:REDIS_PASSWORD
}
const redis = new Redis(options);

redis.on("connect", ()=>{
    console.log("Redis connecting to Server.");
});

redis.on("ready", ()=>{
    console.log("Redis connection successfully established and ready to use.");
});

redis.on("end", ()=>{
    console.log("Redis connection disconnected.");
});

redis.on("error", (err)=>{
    console.log(`Error occured at ${err.message}`);
});

redis.on("reconnecting", (err)=>{
    console.log("Redis server trying to reconnect");
});

// process.on("SIGINT", ()=>{
//     client.quit();
// });

module.exports = redis;