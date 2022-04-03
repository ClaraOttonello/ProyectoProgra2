var data = require('../db/data');

const userController = {

    profile: function(req, res) {
        res.render('index');
    },
    
    edit: function(req, res) {
        res.render('index');
    }
}

module.exports = userController;