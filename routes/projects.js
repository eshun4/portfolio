const express = require('express');
const router = express.Router();
const projectsController = require("../controllers/projects");

router.route('/:id',  /*  #swagger.tags = ['Projects'] */).get(projectsController.read).put(projectsController.update).delete(projectsController.delete);
router.route('/',  /*  #swagger.tags = ['Projects'] */).post(projectsController.create);
module.exports = router;