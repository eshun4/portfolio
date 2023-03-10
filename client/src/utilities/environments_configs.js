

const configurations = {
    REACT_APP_BASE_URL:process.env.REACT_APP_BASE_URL,
    
    REACT_APP_PORT:process.env.REACT_APP_PORT,
    REACT_APP_BASE_VERSIONING:process.env.REACT_APP_BASE_VERSIONING,
    REACT_APP_BASE_PATH:process.env.REACT_APP_BASE_PATH,
    REACT_APP_HOMEPAGE:process.env.REACT_APP_HOMEPAGE,
    REACT_APP_EDUCATION:process.env.REACT_APP_EDUCATION,
    REACT_APP_PROJECTS:process.env.REACT_APP_PROJECTS,
    REACT_APP_EXPERIENCE:process.env.REACT_APP_EXPERIENCE,
    REACT_APP_TOOLS_AND_ETHICS:process.env.REACT_APP_TOOLS_AND_ETHICS,
    REACT_APP_RESUME:process.env.REACT_APP_RESUME,
    REACT_APP_ADMIN_PANEL:process.env.REACT_APP_ADMIN_PANEL,
    REACT_APP_DOCUMENTATION:process.env.REACT_APP_DOCUMENTATION,
    REACT_APP_USER:process.env.REACT_APP_USER,
    //MONGODB REDENTIALS
    REACT_APP_DB_USERNAME:process.env.REACT_APP_DB_USERNAME,
    REACT_APP_DB_PASSWORD:process.env.REACT_APP_DB_PASSWORD,
    REACT_APP_DB_PREFIX:process.env.REACT_APP_DB_PREFIX,
    REACT_APP_DB_CLUSTER:process.env.REACT_APP_DB_CLUSTER,
    REACT_APP_DB_NAME:process.env.REACT_APP_DB_NAME,
    REACT_APP_DB_COLLECTION_1:process.env.REACT_APP_DB_COLLECTION_1,
    REACT_APP_DB_COLLECTION_2:process.env.REACT_APP_DB_COLLECTION_2,
    REACT_APP_DB_COLLECTION_3:process.env.REACT_APP_DB_COLLECTION_3,
    REACT_APP_DB_COLLECTION_4:process.env.REACT_APP_DB_COLLECTION_4,
    REACT_APP_DB_COLLECTION_5:process.env.REACT_APP_DB_COLLECTION_5,
    REACT_APP_DB_COLLECTION_6:process.env.REACT_APP_DB_COLLECTION_6,
    // AUTH0 CREDENTIALS
    REACT_APP_AUTH0_DOMAIN:process.env.REACT_APP_AUTH0_DOMAIN,
    REACT_APP_AUTH0_ISSUER_BASE_URL:process.env.REACT_APP_AUTH0_ISSUER_BASE_URL,
    REACT_APP_AUTH0_CLIENT_ID:process.env.REACT_APP_AUTH0_CLIENT_ID,
    REACT_APP_AUTH0_CLIENT_SECRET:process.env.REACT_APP_AUTH0_CLIENT_SECRET,
    /* pulls the Redis URL from .env */
    REACT_APP_REDIS_URL:process.env.REACT_APP_REDIS_URL,
    REACT_APP_REDIS_PORT:process.env.REACT_APP_REDIS_PORT,
    REACT_APP_API_NINJA_KEY:process.env.REACT_APP_API_NINJA_KEY
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


export default env;
