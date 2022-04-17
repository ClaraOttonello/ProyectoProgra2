var data = require('../db/data');

const productController = {

    index: function(req, res){
        res.render('product_index', {products: data.products});
    },



    show: function(req, res) {
        res.render('product_detail', {product: data.products[req.params.id-1], comments: data.comments});
    },

    add: function(req, res) {
        res.render('add_product');
    },

    //Prueba comentarios despúes arreglamos y cambiamos
    showComment: function(req, res){
        res.send(data.comments)
    }
}

module.exports = productController;