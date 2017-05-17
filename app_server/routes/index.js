var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOther = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


/* other pages */
router.get('/about', ctrlOther.about);

module.exports = router;
