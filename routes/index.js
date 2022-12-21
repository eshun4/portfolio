const express = require('express');
const router = express.Router();
const env = require('../utilities/environments_configs');
const swaggerUI = require('swagger-ui-express');
const eduRoute = require('../routes/education');
const expRoute = require('../routes/experience');
const homeRoute = require('../routes/home');
const projRoute = require('../routes/projects');
const resRoute = require('../routes/resume');
const toolsRoute = require('../routes/tools');
// const home = `${env.state.configurations.HOMEPAGE}`;
// const experience = `${env.state.configurations.EXPERIENCE}`;
// const education = `${env.state.configurations.EDUCATION}`;
// const project = `${env.state.configurations.PROJECTS}`;
const documentation = `${env.state.configurations.DOCUMENTATION}`;
// const resume = `${env.state.configurations.RESUME}`;
// const tools = `${env.state.configurations.TOOLS_AND_ETHICS}`;
const { auth } = require('express-openid-connect');
const config = require('../middlewares/authentication');
const userRoute = require("../routes/user");
const user = `${env.state.configurations.USER}`;
const bodyParser = require("body-parser");
const cors = require('cors');
// const admin = `${env.state.configurations.ADMIN_PANEL}`;
// const version = `${env.state.configurations.BASE_VERSIONING}`;
// const base_path = `${env.state.configurations.BASE_PATH}`;
require('../redis/redis');

const swaggerJson = require('../swagger_docs.json');
router.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
router.use(cors());

router.use(auth(config));
router.use('/user', userRoute);
router.use('/', homeRoute );
router.use('/education', eduRoute );
router.use('/experience', expRoute );
router.use('/projects', projRoute );
router.use('/resume_cv', resRoute );
router.use('/tools_and_ethics', toolsRoute);

router.use(documentation, swaggerUI.serve, swaggerUI.setup(swaggerJson));


module.exports = router;