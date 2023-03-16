const express = require('express');
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');

const router = express.Router();

router.use(logger);

router.get('/:id', auth, (req, res) => {
    res.send('About GET');
})

router.post('/', auth, (req, res) => {
    res.send('About POST');
    setTimeout(() => {
        console.log("Execute this line after the response is sent.")
    }, 2000)
})

module.exports = router;