var data = require('../db/data');
var db = require('../database/models')

const productController = {

    index: function (req, res) {
        db.findAll()
            .then(function(products){
                res.render('product_index', { products });
            })
            .catch(function (error) {
                res.send(error)
            });           
    },

    show: function(req, res) {
        db.Product.findByPk(req.params.id)
            .then(function (products) {
                res.render('product_index', { products });
            })
            .catch(function (error) {
                res.send(error);
            })
    },

    add: function (req, res) {
        res.render('add_product');
    },

    store: function(req, res) {
        db.Product.create(req.body)
            .then(function() {
                res.redirect('/')
            })
            .catch(function(error) {
                res.send(error);
            })
    }
}

module.exports = productController;