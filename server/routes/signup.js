var express = require('express'),
    router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send({"authentication": "success"});
});

module.exports = router;