const router = require('express').Router();
const { Project } = require('../../models');
//match /api/projects/
router.get('/', async(req, res) =>{
    try{
    const projects = await Project.findAll()
    res.status(200).json(projects)
    }catch(err) {
        res.status(400).json(err);
    }
})

module.exports = router;