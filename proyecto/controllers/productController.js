var db = require('../database/models');
const product = db.products;

const productController = {

    index: function (req, res) {
        product.findAll()
            .then(function(products){
                res.render('product_index', {products});
            })
            .catch(function (error) {
                res.send(error)
            });           
    },

    show: function(req, res) {
        product.findByPk(req.params.id)
            .then(function (products) {
                res.render('product_detail', { products });
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    add: function (req, res) {
        res.render('add_product');
    },

    store: function(req, res) {
        req.body.user_id = req.session.user.id;
        
        if (req.file) req.body.img = (req.file.path).replace('public', '');
        //image es el nombre del campo del formulario que carga la imagen
        //para que venga el req.file primero le pusimos al formulario el enctype="multipart/form-data" 
        //en req.file hay muchas propiedades y la mas importante es el path que tiene la ruta completa en donde esta el archivo
        //el path lo aclaramos nosotoros en la carpeta destin   ation en la ruta
        product.create(req.body)
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },

    delete: function(req, res) {
        product.destroy({ where: { id: req.params.id } })
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
    
    edit: function(req, res) {
       product.findByPk(req.params.id)
            .then(function (products) {
                res.render('product_edit', { products });
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    update: function(req, res) {
        product.update(req.body, { where: { id: req.params.id } })
            .then(function(products) {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
}

module.exports = productController;