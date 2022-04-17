var data = require('../db/data');
const indexController = {
    index: function (req, res) {
        res.render('index', { products: data.products });
    },
    login: function (req, res) {
        res.render('login');
    },
    register: function (req, res) {
        res.render('register');
    }
}

module.exports = indexController;