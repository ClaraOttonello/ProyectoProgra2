var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');

router.get('/login', controller.login);
router.post('/login', controller.access);
router.get('/register', controller.register);
router.post('/register', controller.store);
router.get('/', controller.index);

module.exports = router;
