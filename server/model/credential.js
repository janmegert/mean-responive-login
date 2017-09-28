var mongoose = require('mongoose');
var Schema= mongoose.Schema;

//define model
var schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    emailAddress: {type: String, required: true}
});

//output model
module.exports = mongoose.model('credential', schema);