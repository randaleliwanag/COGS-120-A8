var data = require('../summary.json');

exports.view = function(req, res){
    res.render('summary', data);
};