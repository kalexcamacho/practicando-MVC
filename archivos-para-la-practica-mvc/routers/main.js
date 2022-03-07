const express = require('express');
const router = express.Router();
const controlador = require('../controllers/mainController')

router.get('/', controlador.home);

router.get('/about', controlador.about);

module.exports = router;