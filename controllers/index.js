const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async(req, res) => {
    if (req.session.logged_in == true){
        res.render('findGroupMain')
    }
    else res.render('splash');
});

router.get('/login', async(req, res) => {
    res.render('login');
});

router.get('/signup', async(req, res) => {
    res.render('signUp');
});

module.exports = router;