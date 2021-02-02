const mongoose = require('mongoose');
const {Schema} =mongoose;
const UserSchema = new Schema({
  //TODO: seperate data to smaller one, and store in different schema, right now it is insert all into user collection. 
  // subjectId: { type: String,required:true, unique:true, notEmpty:true, check:{trim:true, minlength:10} },
  // username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  // email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},

}, {
  collection:"users",
  timestamps: true,
  strict: false});

const User=mongoose.model('User', UserSchema);
User.collection.createIndex({subjectid:1},{unique:true});

const data =require("../api/data/bundle_health_data.json");
User.insertMany(data)
.then()
.catch(err => {
  if(err && err.code === 11000){
      //Duplicate code
  }else{
    console.log(err);
  }
})

module.exports =User;