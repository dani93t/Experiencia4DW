/**
 * LibrosController
 *
 * @description :: Server-side logic for managing libros
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
		home:function(req,res){
			res.redirect('/listado'); 
		},

		mostrar:function(req,res){
		Libro.find(function foundUser (err, libros) {
                if(err) console.log(err);
                return res.view('CatalogoDeLibros',{
                  libros: libros
                });
              });		
	},

	registrar:function(req,res){
		Libro.create(req.params.all(), function userCreated(err, libro) {
        	if (err) console.log(err);
                res.redirect('/listado'); 
            });
	},


	editar:function(req,res){
		var id = req.param('id');
		Libro.find(id,function(err,libro){
			if(err) return res.send(err);
			else {
				return res.view('venta',{libro:libro});
			}

		}) 

	},


	update:function(req,res){
		var param = req.params.all();
		var id = param.id;
		User.update(id,param,function(err,user){
			if(err) return res.send(err);
			else{
				return res.redirect('/listado');
			}
		});
	},
};

