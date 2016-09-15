//config/express.js

var express = require('express');
//var home = require('../app/routes/home');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

		// exemplo de variavel de ambiente
		app.set('port', 4000);

		// template engine como variabel de ambiente no express
		app.set('view engine', 'ejs');
		app.set('views', './app/views');

		// exemplo de middleware
		app.use(express.static('./public'));
		//home(app);
		
		//midlewares
		app.use(bodyParser.urlencoded({extended:true}));
		app.use(bodyParser.json());
		app.use(require('method-override')()); //navegadores com problema de leitura PUT e DELETE

		// carregamento de instancias da pasta ./app automatiza os require
		// quando utilizar embedd docs descrever a sequencia dos models/modelname1 then models/modelname2 etc ...
		load('models', {cwd: 'app'})
			.then('controllers')
			.then('routes')
			.into(app);

	return app;
};