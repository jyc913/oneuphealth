const express = require('express');
const userRouter = express.Router();
const User= require('../models/User');
const oneup = require('./oneup');


const ONEUP_DEMOWEBAPPLOCAL_CLIENTID ='80efdd5b9252d86124ea88aa5546db7b';
const ONEUP_DEMOWEBAPPLOCAL_CLIENTSECRET ='bc74f4d4e731e5b7c6ab00e6a516c49b';


userRouter.get('/users', (req,res) =>{
  res.send('api is working.');
})

userRouter.get('/bundle',(req, res)=>{
  // getOneUpUserId('jchen',req);

  var oneupAccessToken =
  req.session.oneup_access_token || '111' ;
  // req.headers.authorization.split(' ')[1]; 
  //TODO: get bundle data from 1up api
  oneup.getAllFhirResourceBundles(oneupAccessToken, function(responseData) {
    console.log('in bundle api oneupAccessToken', oneupAccessToken);
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