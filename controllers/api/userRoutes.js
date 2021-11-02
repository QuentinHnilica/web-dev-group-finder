const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try{
        //Finding the the user using their email address
        const userData = await User.findOne({ where: { email: req.body.email } });
        //Error response if user is not found in db
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again'});
            return;
        }

    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;