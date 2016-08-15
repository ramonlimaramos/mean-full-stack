// app/controllers/home.js

var model = require('../models/contato');

module.exports = function() {
	var controller = {};
		controller.index = function(req, res) {
			//retorna a pagina index
			res.render('index', {nome: 'Ramon'});
		};

	return controller;
};