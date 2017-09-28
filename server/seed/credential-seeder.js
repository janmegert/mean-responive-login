var Credential = require('../model/credential');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/credentials');
var fs= require('fs');
var password = fs.readFileSync('../password.txt'); // get password
mongoose.connect('mongodb://j67shi:'+password+'@jay-shi-shard-00-00-zzlsw.mongodb.net:27017,jay-shi-shard-00-01-zzlsw.mongodb.net:27017,jay-shi-shard-00-02-zzlsw.mongodb.net:27017/test?ssl=true&replicaSet=jay-shi-shard-0&authSource=admin');

// create instance of model - documents
var credential = new Credential({
    username: "jay-shi",
    password: "qwerty",
    emailAddress: 'asf@gmail.com'
});
async function saveData(){
    await credential.save();
    mongoose.disconnect();
};
saveData();

