const express = require('express');
const router = express.Router();
const Project = require('../models/project'); // Assuming you have a Project model

// Example route for GET requests to /api/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).send('Error retrieving projects');
  }
});

module.exports = router;
