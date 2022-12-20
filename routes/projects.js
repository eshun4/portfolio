const express = require('express');
const router = express.Router();
const projectsController = require("../controllers/projects");

router.route('/:id').get(projectsController.read).put(projectsController.update).delete(projectsController.delete);
router.route('/').post(projectsController.create);
module.exports = router;