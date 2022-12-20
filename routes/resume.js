const express = require('express');
const router = express.Router();
const resumeController = require("../controllers/resume");

router.route('/:id').get(resumeController.read).put(resumeController.update).delete(resumeController.delete);
router.route('/').post(resumeController.create);
module.exports = router;