var data = require('../db/data');
const indexController = {
    index: function(req, res) {
        res.render(data.user);
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('register');
    }
}

module.exports = indexController;