const express = require('express');
const router = express.Router();
const env = require('../utilities/environments_configs');
const educationController = require("../controllers/education");
const experienceController = require("../controllers/experience");
const projectsController = require("../controllers/projects");
const resumeController = require("../controllers/resume");
const toolsController = require("../controllers/tools");
const experience = `${env.state.configurations.EXPERIENCE}`;
const education = `${env.state.configurations.EDUCATION}`;
const project = `${env.state.configurations.PROJECTS}`;
const resume = `${env.state.configurations.RESUME}`;
const tools_and_ethics = `${env.state.configurations.TOOLS_AND_ETHICS}`;


router.route(`${education}`).get(educationController.adminGET);
router.route(`${experience}`).get(experienceController.adminGET);
router.route(`${project}`).get(projectsController.adminGET);
router.route(`${resume}`).get(resumeController.adminGET);
router.route(`${tools_and_ethics}`).get(toolsController.adminGET);



module.exports = router;