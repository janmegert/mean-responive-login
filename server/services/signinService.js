var Credential = require('../model/credential'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    dbPassword = fs.readFileSync(global.__basedir+'/password.txt'); // get password

async function verifyCredential(username, password){
    try{
        mongoose.connect('mongodb://j67shi:'+dbPassword+'@jay-shi-shard-00-00-zzlsw.mongodb.net:27017,jay-shi-shard-00-01-zzlsw.mongodb.net:27017,jay-shi-shard-00-02-zzlsw.mongodb.net:27017/test?ssl=true&replicaSet=jay-shi-shard-0&authSource=admin');
        var dbResponse = await Credential.find({"username": username});
        var credential = dbResponse[0];
        if(!credential){
            return { isValid: false, signupRequired: true};
        }
        if(credential.password !== password){
            return { isValid: false, signupRequired: false};
        }
        return { isValid: true , signupRequired: false};
    }catch(err){
        console.log('calling service function error');
        console.error(err);
    }finally{
        mongoose.disconnect();
    }
}

module.exports = {
    verifyCredential: verifyCredential
}

