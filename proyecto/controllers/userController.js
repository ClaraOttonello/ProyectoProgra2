var db = require('../database/models')
const products = db.products
const user = db.users
const hasher = require('bcryptjs')

const userController = {

    profile: function (req, res) {
        res.render('profile', { user, products });
    },

    edit: function (req, res) {
        res.render('edit_profile');
    },

    login: function (req, res) {
        res.render('login', {title: 'Login'});
    },

    access: function(req, res, next) {
        user.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.pass, user.pass)) {
                    req.session.user = user;
                   if (req.body.rememberme) {
                       res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 7 });
                   }
                   res.redirect('/');
                } else {
                    throw Error('Invalid credentials.')
                }
            })
            .catch(function (err) {
                next(err)
            })
    },

    register: function (req, res) {
        res.render('register');
    },
    
    store: function (req, res) {
        
        if (!req.body.email) { throw Error('Not email provided.') }
        const hashedPassword = hasher.hashSync(req.body.pass, 10);
        user.create({
                username: req.body.username,
                pass: hashedPassword,
                email: req.body.email
            })
            .then(function () {
                res.redirect('/products');
            })
            .catch(function (error) {
                res.send(error);
            }) 
    }
}

module.exports = userController;