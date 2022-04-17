var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

router.get('/detail/:id', controller.show);
router.get('/add', controller.add);
router.get('/', controller.index);


module.exports = router;