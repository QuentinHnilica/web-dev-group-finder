const router = require("express").Router();
const { User, Project, Posts, GroupUsers, SocialLink, techNeeded, TechInUse } = require("../models");


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

router.get('/groupInfo/:id', async(req, res) =>{
    try{
        const posts = await Project.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/groupUsers/:id', async(req, res) =>{
    try{
        const posts = await GroupUsers.findAll({
            where: {
                GroupId: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/social/:id', async(req, res) =>{
    try{
        const posts = await SocialLink.findAll({
            where: {
                GroupId: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/needed/:id', async(req, res) =>{
    try{
        const posts = await techNeeded.findAll({
            where: {
                GroupId: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/inUse/:id', async(req, res) =>{
    try{
        const posts = await TechInUse.findAll({
            where: {
                GroupId: req.params.id
            }
        });
        res.status(200).json(posts)
    }catch(err){
        res.status(400).json(err)
    }
})

router.get('/user', async(req,res)=>{
    try{
        const theUser = await User.findOne({
            where:{
                id: req.session.user_id
            }
        })
        res.status(200).json(theUser)
        
    }catch{
        res.status(400).json(err)
    }
    
})

router.get('/getGroups/:name', async(req, res) => {
    try{
        const allGroups = await GroupUsers.findAll({
            where:{
                Username: req.params.name
            }
        })
        res.status(200).json(allGroups)
    }catch{
        res.status(400).json(err)
    }
})

module.exports = router;