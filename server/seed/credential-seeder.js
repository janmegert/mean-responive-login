var Credential = require('../model/credential');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/credentials');

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

