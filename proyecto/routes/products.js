var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

router.get('/', controller.index);
router.get('/detail/:id', controller.show);
router.get('/:id/edit', controller.edit);
router.post('/:id/edit', controller.update);
router.get('/add', controller.add);
router.post('/add', controller.store);
router.post('/:id/delete', controller.delete);
router.get('/:id', controller.show);

module.exports = router;