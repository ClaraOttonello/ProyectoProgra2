var db = require ('../database/models');
var op = db.Sequelize.Op;

const indexController = {
    
    index: function (req, res) {
        db.products.findAll()
            .then(function(products){
                res.render('product_index', {products});
            })
            .catch(function (error) {
                res.send(error)
            });           
    },

    search: function(req, res) {
        db.products.findAll({ 
            where: {
                [op.or]: [
                    { _name: { [op.like]: "%"+req.query.criteria+"%"} },
                    { _description: { [op.like]: "%"+req.query.criteria+"%"} }
                ]
            }, 
            include: [ { association: 'owner' } ] 
        }).then(function (products) {
                res.render('search_results', { products });
            })//product_index
            .catch(function (error) {
                res.send(error)
            });
    },
    
}

module.exports = indexController;