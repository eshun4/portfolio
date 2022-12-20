const express = require('express');
const router = express.Router();
const educationController = require("../controllers/education");
const cacheObject = require('../middlewares/cache');

router.route('/:id', /*  #swagger.tags = ['Education']*/).get(educationController.read ).put(educationController.update).delete(educationController.delete,);
router.route('/', /*  #swagger.tags = ['Education']*/).post(educationController.create);
module.exports = router;