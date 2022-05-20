var data = require('../db/data');

const userController = {

    profile: function (req, res) {
        res.render('profile', { user: data.user, products: data.products });
    },

    edit: function (req, res) {
        res.render('edit_profile');
    }
}

module.exports = userController;