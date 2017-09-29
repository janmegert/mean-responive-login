var Credential = require(global.__basedir+'/model/credential'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    dbPassword = fs.readFileSync(global.__basedir+'/password.txt');// get password; 

async function signupAccount(username, password, email){
    try{
        mongoose.connect('mongodb://j67shi:'+dbPassword+'@jay-shi-shard-00-00-zzlsw.mongodb.net:27017,jay-shi-shard-00-01-zzlsw.mongodb.net:27017,jay-shi-shard-00-02-zzlsw.mongodb.net:27017/test?ssl=true&replicaSet=jay-shi-shard-0&authSource=admin');
        // check if account already exist
        var dbResponse = await Credential.find({"username": username});
        var credential = dbResponse[0];
        if(credential){
            return { signupSuccess: false, repeatedAccount: true}
        }else{
            let credential = new Credential({
                username: username,
                password: password,
                emailAddress: email
            });
            await credential.save();
            return { signupSuccess: true, repeatedAccount: false};
        }
    }catch(err){
        console.log('calling service function error');
        console.error(err);
    }finally{
        mongoose.disconnect();
    }
}

module.exports = {
    signupAccount: signupAccount
}


