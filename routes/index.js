const express = require('express');
const router = express.Router();
const homeController = require("../controllers/index");
const swaggerUI = require('swagger-ui-express');


const swaggerJson = require('../swagger_docs.json');
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));
router.route('/').get( homeController.Homepage);
router.route('/dashboard').get( homeController.Dashboard);

module.exports = router;