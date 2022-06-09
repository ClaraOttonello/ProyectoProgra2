var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController');

router.get('/', controller.index);
router.get('/search', controller.search);

module.exports = router;