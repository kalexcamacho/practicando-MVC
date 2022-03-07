// Módulos
const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./src/routes/mainRouter')

// Configuración
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")


// Rutas
app.use('/', mainRouter);


app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})