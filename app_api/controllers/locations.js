//required for MongoDB connection
var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

//function that sends the parameter status and content as JSON
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};


//location API controller functions
module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {status: 'ByDistanceWorks'});
};
module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {status: 'CreateWorks'});
};
module.exports.locationsReadOne = function (req, res) {
    if (req.params && req.params.locationid) {

        Loc
                .findById(req.params.locationid)
                .exec(function (err, location) {
                    if (!location) {
                        sendJsonResponse(res, 404, {
                            message: "locationid not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 200, location);
                });
    } else {
        sendJsonResponse(res,404,{
           message: "no locationid in request" 
        });
    }
};
module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {status: 'UpdateWorks'});
};
module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {status: 'DeleteWorks'});
};
