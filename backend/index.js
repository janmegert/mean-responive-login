var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.get('/test', function(req, res){
    console.log(req.body)
    res.send('success!');
});

app.post('/backend', function(req, res){
    console.log(req.body)
    res.send('success!');
});
app.listen(3000);