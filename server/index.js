var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://55.55.55.5/mongo');
mongoose.model('user', {username: String});

app.use(bodyParser.json());
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
 
app.get('/test', function(req, res){
    console.log(req.body)
    res.send('success!');
});

app.get('/users', function(req, res){
    mongoose.model('users').find(function(err, users){
        res.send(users);
    })
});

app.post('/backend', function(req, res){
    console.log(req.body);
    res.send({"authentication": "success"});
});
app.listen(3000, ()=>{
    console.log('server is up');
});