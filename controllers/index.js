const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', async(req, res) => {
    res.send('HOMEPAGE');
});

router.get('/login', async(req, res) => {
    res.send('LOGIN');
});

router.get('/signup', async(req, res) => {
    res.send('SIGN UP');
});

module.exports = router;