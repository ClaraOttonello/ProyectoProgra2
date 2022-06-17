var db = require ('../database/models');
const products = db.products;
var op = db.Sequelize.Op;

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

    search: function(req, res) {
        products.findAll({ 
            where: {
                [op.or]: [
                    { _name: { [op.like]: "%"+req.query.criteria+"%"} },
                    { _description: { [op.like]: "%"+req.query.criteria+"%"} }
                ]
            }, 
            include: [ { association: 'owner' } ] 
        }).then(function (products) {
                res.render('product_index', { products });
            })
            .catch(function (error) {
                res.send(error)
            });
    },
}

module.exports = indexController;