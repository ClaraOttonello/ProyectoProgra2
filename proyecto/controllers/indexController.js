
var db = require ('../database/models');


const indexController = {
    index: function (req, res) {
        res.render('index', { products: db.products });
    },

    login: function (req, res) {
        res.render('login');
    },

    access: function(req, res, next) {
        db.User.findOne({ where: { username: req.body.username }})
            .then(function(user) {
                if (!user) throw Error('User not found.')
                if (hasher.compareSync(req.body.pass, user.pass)) {
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
        db.User.create({
                username: req.body.username,
                pass: hashedPassword,
                email: req.body.email,
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error) {
                res.send(error);
            })
    }
}

module.exports = indexController;