module.exports = function(sequelize, dataTypes) { /* dataTypes me indicará los tipos de columnas de nuestros datos */

    let alias = "Actor"; 

    let cols = { 
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {   
            as: "peliculas", 
            through: "actor_movie", /* tabla intermedia */                 
            foreignKey: "actor_id",
            otherKey: "movie_id", /* otra clave foránea */
            timestamps: false
        })
    }
    
    return Actor;
}