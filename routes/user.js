const express = require('express');
const router = express.Router();
const userController =require("../controllers/user");
const findOrCreate = require('mongoose-findorcreate');
const userSchema= require("../models/user");

userSchema.plugin(findOrCreate);
router.get("/signin", userController.signin);

module.exports = router;