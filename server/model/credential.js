var mongoose = require('mongoose');
var Schema= mongoose.Schema;

//define schema
var credentialSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    emailAddress: {type: String, required: true}
}, {collection: 'credentials'}); //define collection name

//output model
module.exports = mongoose.model('credential', credentialSchema);