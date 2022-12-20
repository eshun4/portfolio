const express = require('express');
const router = express.Router();
const educationController = require("../controllers/education");

router.route('/:id').get(educationController.read).put(educationController.update).delete(educationController.delete);
router.route('/').post(educationController.create);
module.exports = router;