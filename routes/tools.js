const express = require('express');
const router = express.Router();
const toolsController = require("../controllers/tools");

router.route('/:id',  /*  #swagger.tags = ['Tools'] */).get(toolsController.read).put(toolsController.update).delete(toolsController.delete);
router.route('/',  /*  #swagger.tags = ['Tools'] */).post(toolsController.create);
module.exports = router;