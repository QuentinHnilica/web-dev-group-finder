const router = require('express').Router();
const { Project, techNeeded } = require('../../models');

//matches /api/projects/
router.get('/', async(req, res) =>{
    try{
    const projects = await Project.findAll()
    res.status(200).json(projects)
    }catch(err) {
        res.status(400).json(err);
    }
})

router.get('/search', async(req, res) =>{
    try{
    const projects = await techNeeded.findAll()
    res.status(200).json(projects)
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;