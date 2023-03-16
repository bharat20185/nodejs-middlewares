const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

router.use(auth);

router.get('/:id', (req, res) => {
    res.send('Services GET');
})

router.post('/', (req, res) => {
    res.send('Services POST');
})

module.exports = router;