/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var adviceRouter = express.Router();

  adviceRouter.get('/', function(req, res) {
    // console.log(`advice for ${req.query.weather} ?`);
    res.send({
      advice: 'Flippy Floppies'
    });
  });

  app.use('/api/advice', adviceRouter);
};
