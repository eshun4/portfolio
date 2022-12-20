const express = require('express');
const router = express.Router();
const resumeController = require("../controllers/resume");

router.route('/:id',  /*  #swagger.tags = ['Resume'] */).get(resumeController.read).put(resumeController.update).delete(resumeController.delete);
router.route('/',  /*  #swagger.tags = ['Resume'] */).post(resumeController.create);
module.exports = router;