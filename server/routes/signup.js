var express = require('express'),
    router = express.Router(),
    signinService = require(global.__basedir+'/services/signupService');

/* GET home page. */
router.post('/', async function(req, res, next) {
    var signupResult = await signinService.signupAccount(req.body.username, req.body.password, req.body.email);
    res.send(signupResult);
});

module.exports = router;