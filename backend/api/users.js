const express = require('express');
const userRouter = express.Router();
const User= require('../models/User');


userRouter.get('/users', (req,res) =>{
  res.send('api is working.heelo');
})

userRouter.get('/bundle',(req, res)=>{
  User.find().then(users =>{
    res.json(users);
  })
  .catch(err=>res.status(400).json(`error:${err.message}`));
});

module.exports =userRouter;