var data = require('../db/data');

const controller = {
    profile: function(req, res) {
        res.render('index');
    },
    edit: function(req, res) {
        res.render('index');
    }
}

module.exports = controller;