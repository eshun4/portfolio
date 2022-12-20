const express = require('express');
const router = express.Router();
const experienceController = require("../controllers/experience");

router.route('/:id',  /*  #swagger.tags = ['Experience'] */).get(experienceController.read).put(experienceController.update).delete(experienceController.delete);
router.route('/',  /*  #swagger.tags = ['Experience'] */).post(experienceController.create);
module.exports = router;