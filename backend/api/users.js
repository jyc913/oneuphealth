const express = require('express');
const userRouter = express.Router();
const User= require('../models/User');
const oneup = require('./oneup');


userRouter.get('/bundle',(req, res)=>{
  //TODO: get bundle data from 1up api 
  var oneupAccessToken =
  req.session.oneup_access_token || '111' ;
  // req.headers.authorization.split(' ')[1]; 
  
  oneup.getAllFhirResourceBundles(oneupAccessToken, function(responseData) {
    // res.send({ token: oneupAccessToken, resources: responseData });
  });

  //TODO: store it to the mongo db (currently store sample json file on the db)
  //retrieve from mongo db
  User.find().then(users =>{
    res.json(users);
  })
  .catch(err=>res.status(400).json(`error:${err.message}`));
});

module.exports =userRouter;