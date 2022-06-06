var db = require ('../database/models');
const products = db.products;

const indexController = {
    
    index: function (req, res) {
        products.findAll()
            .then(function(products){
                res.render('product_index', {products});
            })
            .catch(function (error) {
                res.send(error)
            });           
    },
}

module.exports = indexController;