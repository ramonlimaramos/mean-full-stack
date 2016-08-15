// app/routes/home.js

//var controller = require('../controllers/home')();

module.exports = function(app) {
	//app.get('/index', controller.index);
	var controller = app.controllers.home;
	app.get('/', controller.index);
};