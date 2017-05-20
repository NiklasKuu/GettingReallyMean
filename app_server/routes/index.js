var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');
var ctrlOther = require('../controllers/others');


/* Locations pages */
router.get('/', ctrlLocations.homeList);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router.get('/location/:locationid/review/new', ctrlLocations.addReview);
router.post('/location/:locationid/review/new', ctrlLocations.doAddReview);

/* other pages */
router.get('/about', ctrlOther.about);

module.exports = router;
