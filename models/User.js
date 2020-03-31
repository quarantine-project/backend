const mongoose = require('mongoose');
//const Schema = mongoose.Schema; smae thing below 
const { Schema } = mongoose; 


const userSchema = new Schema({
	googleID: String
});

mongoose.model('users', userSchema);