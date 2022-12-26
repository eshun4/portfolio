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
const documentation = `${env.state.configurations.DOCUMENTATION}`;
const { auth } = require('express-openid-connect');
const config = require('../middlewares/authentication');
const userRoute = require("../routes/user");
const bodyParser = require("body-parser");
const cors = require('cors');
const admin = `${env.state.configurations.ADMIN_PANEL}`;
const version = `${env.state.configurations.BASE_VERSIONING}`;
const base_path = `${env.state.configurations.BASE_PATH}`;
const adminRouter = require('../routes/admin');


const swaggerJson = require('../swagger_docs.json');
router.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
router.use(cors());

router.use(auth(config));
router.use('/user', userRoute);
router.use('/', homeRoute );
router.use('/edu', eduRoute );
router.use('/exp', expRoute );
router.use('/proj', projRoute );
router.use('/cv', resRoute );
router.use('/T_and_E', toolsRoute);
router.use(`${version}${base_path}${admin}`, adminRouter);

router.use(documentation, swaggerUI.serve, swaggerUI.setup(swaggerJson));


module.exports = router;