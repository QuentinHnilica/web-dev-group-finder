const router = require("express").Router();
const { User, Project, Posts } = require("../models");

router.get('/posts/:id', async(req, res) =>{
    try{
        const posts = await Posts.findAll({
            where: {
                GroupId: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

module.exports = router;