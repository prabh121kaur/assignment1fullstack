const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Skill = require('../models/skill');

// Render Add Project Form
router.get('/addProject', (req, res) => {
  res.render('admin/addProject');
});

// Create New Project
router.post('/projects', async (req, res) => {
  const { name, description, technologies, link } = req.body;
  const techArray = technologies.split(',');
  await Project.create({ name, description, technologies: techArray, link });
  res.redirect('/admin/addProject');
});

// Render Add Skill Form
router.get('/addSkill', (req, res) => {
  res.render('admin/addSkill');
});

// Create New Skill
router.post('/skills', async (req, res) => {
  const { name, level } = req.body;
  await Skill.create({ name, level });
  res.redirect('/admin/addSkill');
});

// Fetch and Display All Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// Fetch and Display All Skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json({ skills });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching skills' });
  }
});

module.exports = router;
