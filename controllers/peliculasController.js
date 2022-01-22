let db = require('../database/models'); /* aqui nos traemos la base de datos y podemos interactuar */

let peliculasController = {

    crear: function (req, res) { /* que el usuario pueda elegir el género */
        db.Genero.findAll() /*me traigo el nombre que le asigne*/
           .then(function(generos) {
               return res.render('listadoPeliculas', { generos : generos }); /* aclaro que datos quiero mostrar */
           })
    }

}


module.exports = peliculasController;