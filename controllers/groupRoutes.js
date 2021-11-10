const router = require("express").Router();
const { User, Project, Posts, GroupUsers, SocialLink, techNeeded, TechInUse, JoinRequest } = require("../models");


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

router.post('/updateNeed/:id', async(req, res) => {
    try{
        const update = await techNeeded.create(req.body)
        res.status(200).json(update)

    }catch{
        res.status(400).json(err)
    }
})

router.delete('/removeTech/:id', async(req, res) => {
    try{
        const deleted = await techNeeded.destroy({
            where:{
                GroupId: req.params.id
            }
        })
        res.status(200).json(deleted)
    }catch{
        res.status(400).json(err)
    }
})

router.delete('/removeGroup/:id', async(req, res) => {
    try{
        const deleted = await Project.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(deleted)
    }catch{
        res.status(400).json(err)
    }
})

router.delete('/removeLinks/:id', async(req, res) => {
    try{
        const deleted = await SocialLink.destroy({
            where:{
                GroupId: req.params.id
            }
        })
        res.status(200).json(deleted)
    }catch{
        res.status(400).json(err)
    }
})

router.post('/remakeGroup', async(req, res) => {
    try{
        const newGroup = await Project.create(req.body)
        res.status(200).json(newGroup)

    }catch{
        res.status(400).json(err)
    }
})

router.post('/updateLinks', async(req, res) => {
    try{
        const newLink = await SocialLink.create(req.body)
        res.status(200).json(newLink)

    }catch{
        res.status(400).json("uh oh. didn't work")
    }
})

router.post('/addPost', async(req, res) => {
    try{
        const newPost = await Posts.create(req.body)
        res.status(200).json(newPost)

    }catch{
        res.status(400).json("uh oh. didn't work")
    }
})

router.post('/requestToJoin', async(req, res) => {
    try{
        const newRequest = await JoinRequest.create(req.body)
        res.status(200).json(newRequest)
    }catch{
        res.status(400).json(err)
    }
})

router.get('/getReqs/:id', async(req, res) => {
    try{
        const rekts = await JoinRequest.findAll({
            where:{
                GroupId: req.params.id
            }
        })
        res.status(200).json(rekts)
    }catch{
        res.status(400).json(err)
    }
})

router.delete('/reject', async(req, res) => {
    try{
        const deleted = await JoinRequest.destroy({
            where:{
                GroupId: req.body.GroupId,
                message: req.body.message
            }
        })
        res.status(200).json(deleted)
    }catch{
        res.status(400).json(err)
    }
})

router.post('/accept', async(req, res) => {
    try{
        const newRequest = await GroupUsers.create(req.body)
        res.status(200).json(newRequest)
    }catch{
        res.status(400).json(err)
    }
})


module.exports = router;