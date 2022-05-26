var db = require ('../database/models');
const users = db.users;
const hasher = require('bcryptjs');

const indexController = {
    index: function (req, res) {
        res.render('index', { products: db.products });
    },

    login: function (req, res) {
        res.render('login');
    },

    access: function(req, res, next) {
        users.findOne({ where: { username: req.body.username }})
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
        let img = req.file.fieldname;
        let info = req.body;
        
        if (!req.body.email) { throw Error('Not email provided.') }
        const hashedPassword = hasher.hashSync(req.body.pass, 10);
        users.create({
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
          res.redirect("/");
    }
}

module.exports = indexController;