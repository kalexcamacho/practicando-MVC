const express = require('express');
const app = express();
const rutasMain = require('./routers/main');

app.use(express.static(__dirname + '/public'));

app.use('/', rutasMain);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
})