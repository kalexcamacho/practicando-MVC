const path = require('path');

let platos =[
    {
        plato:'Carpaccio fresco',
        descripcion:'Entrada Carpaccio de salmón con cítricos ',
        precio: 'U$S ' + 65.50,
        imgSrc: '/images/menu.jpg'
    },
    {
        plato:'Risotto de berenjena',
        descripcion:'Risotto de berenjena y queso de cabra ',
        precio: 'U$S ' + 47.00,
        imgSrc: '/images/menu.jpg'
    },
    {
        plato:'Mousse de arroz',
        descripcion:'Mousse de arroz con leche y aroma de azahar ',
        precio: 'U$S ' + 27.50,
        imgSrc: '/images/menu.jpg'
    },
    {
        plato:'Espárragos blancos',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico ',
        precio: 'U$S ' + 37.50,
        imgSrc: '/images/menu.jpg'
    }
    
]

const controller = {
    index: (req, res) => res.render('index', {platos}),
    detalleMenu: (req, res) => {
        let idPlato = req.params.id

        if(idPlato == undefined){
            return res.render('error404');
        }else if(idPlato > (platos.length - 1)){
            return res.render('error404');
        }else{
            return res.render('detalleMenu', {platos, idPlato});
        }
        
    }
}

module.exports = controller;