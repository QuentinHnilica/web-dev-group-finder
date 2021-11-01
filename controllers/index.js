const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Howdy!');
});

module.exports = router;