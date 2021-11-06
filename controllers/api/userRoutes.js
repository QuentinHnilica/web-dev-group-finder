const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try{
        console.log(req.body.userName)
        const userData = await User.findOne({ where: { username: req.body.userName } });
        console.log(userData)
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again'});
            return;
        }
        
        req.session.save(() => {
            console.log("save is called")
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            console.log(req.session)
            res.json({ user: userData, message: 'You are now logged in!' });
          });
    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;