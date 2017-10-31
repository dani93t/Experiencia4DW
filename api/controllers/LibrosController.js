/**
 * LibrosController
 *
 * @description :: Server-side logic for managing libros
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

		mostrar:function(req,res){
		Libros.find(function foundUser (err, libross) {
                if(err) console.log(err);
                return res.view('lista',{
                  libross: libross
                });
              });		
	},


};

