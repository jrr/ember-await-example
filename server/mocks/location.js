/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var locationRouter = express.Router();

  locationRouter.get('/', function(req, res) {
    res.send({
      lat: 42.95533,
      long: -85.64287
    });
  });
  app.use('/api/location', locationRouter);
};
