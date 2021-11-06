const router = require('express').Router();
const { Project } = require('../../models');

router.get('/projects', async(req, res) =>{
    await Project.findAll()
})

module.exports = router;