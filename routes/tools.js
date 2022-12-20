const express = require('express');
const router = express.Router();
const toolsController = require("../controllers/tools");

router.route('/:id').get(toolsController.read).put(toolsController.update).delete(toolsController.delete);
router.route('/').post(toolsController.create);
module.exports = router;