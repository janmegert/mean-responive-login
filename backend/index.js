var express = require('express');
var app = express();
 
app.get('/backend', function(req, res){
    res.send('success!');
})

app.listen(3000);