/* GET 'home' page */
module.exports.homeList = function (req,res){
    res.render('index', {title: 'home' });
};

/* GET 'location info' page */
module.exports.locationInfo = function (req,res){
    res.render('index', {title: 'Location info' });
};

/* GET 'Add review' page */
module.exports.addReview = function (req,res){
    res.render('index', {title: 'Add review' });
};
