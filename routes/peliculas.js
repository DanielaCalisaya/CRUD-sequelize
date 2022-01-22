let express = require('express');
let router = express.Router();
let peliculasController = require('../controllers/peliculasController')

//Creación
router.get('/crear', peliculasController.crear)

module.exports = router;