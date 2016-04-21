/* jshint nonew: false */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var CronJob = require('cron').CronJob;
var counter = 0;
new CronJob('0 * * * * *', function() {
    counter = counter + 1;
}, null, true, 'America/Los_Angeles');

function helloRoute() {
  var hello = new express.Router();
  hello.use(cors());
  hello.use(bodyParser());


  // GET REST endpoint - query params may or may not be populated
  hello.get('/', function(req, res) {
    console.log(new Date(), 'In hello route GET / req.query=', req.query);
    var world = req.query && req.query.hello ? req.query.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'Hello ' + world + '\n' + counter});
  });

  // POST REST endpoint - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  hello.post('/', function(req, res) {
    console.log(new Date(), 'In hello route POST / req.body=', req.body);
    var world = req.body && req.body.hello ? req.body.hello : 'World';

    // see http://expressjs.com/4x/api.html#res.json
    //res.json({msg: 'Hello ' + world});
    res.json({msg: 'Hello ' + world + '\n' + counter});
  });

  return hello;
}

module.exports = helloRoute;
