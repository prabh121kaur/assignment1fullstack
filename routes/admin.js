const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

router.get('/addProject', (req, res) => {
  res.render('admin/addProject');
});

router.post('/projects', async (req, res) => {
  const { name, description, technologies, link } = req.body;
  const techArray = technologies.split(',');
  await Project.create({ name, description, technologies: techArray, link });
  res.redirect('/admin/addProject');
});

router.get('/addSkill', (req, res) => {
  res.render('admin/addSkill');
});

router.post('/skills', async (req, res) => {
  const { name, level } = req.body;
  await Skill.create({ name, level });
  res.redirect('/admin/addSkill');
});

module.exports = router;
