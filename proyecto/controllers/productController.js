var data = require('../db/data');

const productController = {

    index: function(req, res, next){
        res.render('product_index', {products: data.products});
    },

    search: function(req, res) {
        if (req.query) {
            res.render ('search_results',{results: data.findProductsBy(req.query)});
        }
    },

    show: function(req, res) {
        res.render('product_detail', {product: data.products[req.params.id-1], comments: data.comments});
    },

    add: function(req, res) {
        res.render('index');
    },

    //Prueba comentarios despúes arreglamos y cambiamos
    showComment: function(req, res){
        res.send(data.comments)
    }
}

module.exports = productController;