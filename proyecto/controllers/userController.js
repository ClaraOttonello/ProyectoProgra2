var db = require('../database/models')
const products = db.products
const user = db.users
const hasher = require('bcryptjs')

const userController = {

    myProfile: function(req, res) {
        user.findByPk(req.session.user.id, { include: [ { association: 'products' } ] })
            .then(function (data) {
                res.render('profile', { data, products});
            })
            .catch(function (error) {
                res.send(error)
            });
    },
   profile: function(req, res) {
    
        user.findByPk(req.params.id, { include: [ { association: 'products' } ] })
            .then(function (data) {
                res.render('profile', { data, products });
            })
            .catch(function (error) {
                res.send(error)
            });
    },

    edit: function(req, res) {
        product.findByPk(req.params.id)
             .then(function (user) {
                 res.render('edit_profile', { user });
             })
             .catch(function (error) {
                 res.send(error);
             })
     },

    login: function (req, res) {
        res.render('login', {title: 'Login'});
    },

    access: function(req, res, next) {
        user.findOne({ where: { email: req.body.email }})
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
    
    store: async function (req, res, next) {
        try {
            if (!req.body.username) { throw Error('Not username provided.') }
            if (!req.body.email) { throw Error('Not email provided.') }
            if (req.body.pass.length < 4) { throw Error('Password too short.') }
            const user = await db.users.findOne({ where: { email: req.body.email } })
            if (user) { throw Error('Email already in use.') }
        } catch (err) {
            return res.render('register', { error: err.message });
        }
        
        const hashedPassword = hasher.hashSync(req.body.pass, 10);
        user.create({
                username: req.body.username,
                pass: hashedPassword,
                email: req.body.email,
           //     img: (req.file.path).replace('public', '')
            })
            .then(function () {
                res.redirect('/products');
            })
            .catch(function (error) {
                res.send(error);
            }) 
    },

    logout: function (req, res, next) {
        req.session.user = null;
        res.clearCookie('userId');
        res.redirect('/')
    },
}

module.exports = userController;