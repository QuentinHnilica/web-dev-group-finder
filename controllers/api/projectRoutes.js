const router = require('express').Router();
const { Project, techNeeded, Posts } = require('../../models');

//matches /api/projects/
router.get('/', async(req, res) =>{
    try{
    const projects = await Project.findAll()
    res.status(200).json(projects)
    }catch(err) {
        res.status(400).json(err);
    };
});

router.get('/search', async(req, res) =>{
    try{
    const projects = await techNeeded.findAll()
    res.status(200).json(projects)
    }catch(err){
        res.status(400).json(err)
    };
});

router.get('/posts/id:', async(req, res) =>{
    try{
        const posts = await Posts.findAll({
            where: {
                id: req.params.GroupId
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.post('/newGroup', async (req, res) => {
    try{
  
        const userData = await Project.create(req.body);
        res.status(200).json(userData);
  
    }catch(err) {
      res.status(400).json(err);
    };
  });

module.exports = router;
