var db = require ('../database/models');
const users = db.users;
const hasher = require('bcryptjs');

const indexController = {
    index: function (req, res) {
        db.products.findAll()

        .then(function(data){
            console.log(data[0].id);
            res.render('index', { products: data });
        })
        
    },

   
}

module.exports = indexController;