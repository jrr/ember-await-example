/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var weatherRouter = express.Router();

  weatherRouter.get('/', function(req, res) {
    // console.log(`weather for ${req.query.lat},${req.query.long} ?`);
    res.send({
      weather: 'sunny'
    });
  });

  app.use('/api/weather', weatherRouter);
};
