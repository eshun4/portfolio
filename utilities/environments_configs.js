const dotenv = require("dotenv");
dotenv.config({path: "../portfolio/.env" });

const configurations = {
    BASE_URL:process.env.BASE_URL,
    
    PORT:process.env.PORT,
    BASE_VERSIONING:process.env.BASE_VERSIONING,
    BASE_PATH:process.env.BASE_PATH,
    HOMEPAGE:process.env.HOMEPAGE,
    EDUCATION:process.env.EDUCATION,
    PROJECTS:process.env.PROJECTS,
    EXPERIENCE:process.env.EXPERIENCE,
    TOOLS_AND_ETHICS:process.env.TOOLS_AND_ETHICS,
    RESUME:process.env.RESUME,
    ADMIN_PANEL:process.env.ADMIN_PANEL,
    DOCUMENTATION:process.env.DOCUMENTATION,
    USER:process.env.USER,
    //MONGODB REDENTIALS
    DB_USERNAME:process.env.DB_USERNAME,
    DB_PASSWORD:process.env.DB_PASSWORD,
    DB_PREFIX:process.env.DB_PREFIX,
    DB_CLUSTER:process.env.DB_CLUSTER,
    DB_NAME:process.env.DB_NAME,
    DB_COLLECTION_1:process.env.DB_COLLECTION_1,
    DB_COLLECTION_2:process.env.DB_COLLECTION_2,
    DB_COLLECTION_3:process.env.DB_COLLECTION_3,
    DB_COLLECTION_4:process.env.DB_COLLECTION_4,
    DB_COLLECTION_5:process.env.DB_COLLECTION_5,
    DB_COLLECTION_6:process.env.DB_COLLECTION_6,
    // AUTH0 CREDENTIALS
    AUTH0_DOMAIN:process.env.AUTH0_DOMAIN,
    AUTH0_ISSUER_BASE_URL:process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID:process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET:process.env.AUTH0_CLIENT_SECRET,
    /* pulls the Redis URL from .env */
    REDIS_URL:process.env.REDIS_URL,
    REDIS_PORT:process.env.REDIS_PORT,
}

class Configurations {
    constructor(){
        this.state = {
            configurations,
        };
        this.conf.bind(this);
    }
     conf = () =>  configurations;
}

const env = new Configurations();


module.exports = env;
