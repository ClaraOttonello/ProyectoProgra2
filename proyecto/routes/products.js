var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

router.get('/', controller.index);
router.get('/detail/:id', controller.show);
router.get('/add', controller.add);
router.post('/add', controller.store);
router.get('/:id', controller.show);

module.exports = router;