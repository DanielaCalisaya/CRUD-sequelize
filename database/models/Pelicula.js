module.exports = function(sequelize, dataTypes) { /* dataTypes me indicará los tipos de columnas de nuestros datos */

    let alias = "Pelicula"; 

    let cols = { 
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequelize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.hasMany(models.Genero, { /* belongsToMany pertenece a un solo género (ARREGLE ERROR ERA AL FINAL CON HASMANY)*/
            as: "genero",             
            foreignKey: "actor_id"
        });
        /* si tiene otra relación... */
        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
    }
    
    return Pelicula;
}