module.exports = function(sequelize, dataTypes) { /* dataTypes me indicará los tipos de columnas de nuestros datos */

    let alias = "Genero"; /* definiremos como sequelize llamará a nuestra tabla y traerá a esa tabla por ese nombre */

    let cols = { /* estas columnas que me traigo acá son las que sequelize desp va a leer */
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        } 
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequelize.define(alias, cols, config);

    /* Definimos las asociaciones... como se combinan estas tablas */
    Genero.associate = function(models) {   /* muchos a muchos */
        Genero.hasMany(models.Pelicula, {   /* genero tiene muchos ¿? de los modelos que cree vas a utilizar Pelicula, tiene muchas peliculas */
            as: "peliculas",                                /* Pelicula como el nombre que le di en la linea 3 */
            foreignKey: "genre_id"
        })
    }
    
    return Genero;
}