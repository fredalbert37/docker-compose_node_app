const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

module.exports = router;