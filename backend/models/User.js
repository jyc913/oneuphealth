const mongoose = require('mongoose');
const {Schema} =mongoose;
const UserSchema = new Schema({
  subjectId: { type: String,required:true, unique:true, notEmpty:true, check:{trim:true, minlength:10} },
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},

}, {
  collection:"users",
  timestamps: true,
  strict: true});

const User=mongoose.model('User', UserSchema);
User.collection.createIndex({subjectid:1},{unique:true});
module.exports =User;