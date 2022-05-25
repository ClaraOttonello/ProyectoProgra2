
var db = require('../database/models');

const product = db.products;

const productController = {

    index: function (req, res) {
        product.findAll()
            .then(function(products){
                console.log(products);
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
        //cuando avancemos con session agregar:   req.body.user_id = req.session.user.id;
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
            .then(function (product) {
                res.render('product_edit', { product });
            })
            .catch(function (error) {
                res.send(error);
            })
    },
    update: function(req, res) {
        product.update(req.body, { where: { id: req.params.id } })
            .then(function(product) {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    },
}

module.exports = productController;