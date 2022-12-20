const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home");


router.route('/').get(homeController.Homepage);
router.route('/dashboard').get(homeController.Dashboard);
// router.route('*').get(homeController.notfound);

module.exports = router;