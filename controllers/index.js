const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const groupRoutes = require('./groupRoutes')

router.use('/projects', groupRoutes)
router.use('/api', apiRoutes);
router.use('/', homeRoutes);


router.get('/login', async(req, res) => {
    res.render('login');
});

router.get('/signup', async(req, res) => {
    res.render('signUp');
});

module.exports = router;
