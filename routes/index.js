var express = require('express');
var router = express.Router();
var apiModel = require('../model/apiModel');


router.get('/test', function(req, res, next) {
  res.send('hello');
});
/**
 * Return a list af all berth and their status as json
 */
router.get('/getAllBerths', function(req, res, next) {
  apiModel.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

//not testet jet also see coorsponding model in model/model
router.post('/getBerth', function(req, res, next) {
  json = req.body;
  apiModel.get(json._id, function(err, data) {
    console.log(data);
    res.json(data);
  })
});


/**
 * Updata the status of a berth. or create berth if not in the DB
 */
router.put('/updateBerth', function(req, res, next) {
  json = req.body
  console.log(json)
  apiModel.updateBerth(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});

/**
 * Send the index.html file
 */
router.get('/', function(req, res, next) {
  res.sendFile('./public/index.html');
});


module.exports = router;
