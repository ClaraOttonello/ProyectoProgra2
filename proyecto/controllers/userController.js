var db = require('../database/models')

const userController = {

    profile: function (req, res) {
        res.render('profile', { user: db.user, products: db.products });
    },

    edit: function (req, res) {
        res.render('edit_profile');
    }
}

module.exports = userController;