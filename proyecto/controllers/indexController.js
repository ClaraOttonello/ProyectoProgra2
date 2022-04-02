var data = require('../db/data');
const controller = {
    index: function(req, res) {
        res.render(data.lista);
    },
    login: function(req, res) {
        res.render('login');
    },
    register: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;