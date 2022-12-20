const express = require('express');
const router = express.Router();
const experienceController = require("../controllers/experience");

router.route('/:id').get(experienceController.read).put(experienceController.update).delete(experienceController.delete);
router.route('/').post(experienceController.create);
module.exports = router;