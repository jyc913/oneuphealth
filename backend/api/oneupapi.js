const express = require('express');
const bundleRouter = express.Router();


bundleRouter.get('/bundle', (req,res) =>{
  res.send('get bundle.');
})


module.exports =bundleRouter;