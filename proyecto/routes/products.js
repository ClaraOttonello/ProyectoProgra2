var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

router.get('/', controller.index);
router.get('/comments', controller.showComment);
router.get('/detail/:id', controller.show);
router.get('/add', controller.add);

module.exports = router;