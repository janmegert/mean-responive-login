var express = require('express'),
    router = express.Router(),
    signinService = require('../services/signinService');

/* GET home page. */
router.post('/', async function(req, res, next) {
    var verifyResult = await signinService.verifyCredential(req.body.username, req.body.password);
    res.send(verifyResult);
});

module.exports = router;