module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

/* En la línea 1 escribir module.exports sino tira error, si configuramos para que tenga un nombre y una 
contraseña nuestra base ahi tendriamos que ponerlo. Además debemos escribir el nombre de nuestra base de datos */