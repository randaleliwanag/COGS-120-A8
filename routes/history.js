var data = require('../logHistory.json');

exports.view = function(request, response){
	response.render('history', data);
};