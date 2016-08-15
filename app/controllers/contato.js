// app/controllers/contatos.js

var contatos = [
	{ _id: 1, nome: 'Contato 1', email: 'contato1@contatos.com' },
	{ _id: 2, nome: 'Contato 2', email: 'contato2@contatos.com' },
	{ _id: 3, nome: 'Contato 3', email: 'contato3@contatos.com' }
];

module.exports = function() {
	var controller = {};
		controller.listaContatos = function(req, res) {
			res.json(contatos);
		}
		controller.obtemContato = function(req, res) {
			var idContato = req.params.id;
			var contato = contatos.filter(function(contato) {
				return contato._id == idContato;
			})[0];
			contato ?
				res.json(contato) :
				res.status(404).send('Contato não existe');
		}
		return controller;
}