var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');

router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/', controller.index);

module.exports = router;
