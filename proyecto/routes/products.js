var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/', controller.index);
router.get('/detail/:id', controller.show);
router.post('/detail/:id', controller.comment);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('img'), controller.update);

router.get('/add', controller.add);
router.post('/add', upload.single('img'), controller.store);
//upload.single es un middleware que va entre la ruta y el controlador como intermedio, 'image' es el name del campo del formulario

router.post('/:id/delete', controller.delete);

router.get('/:id', controller.show);

module.exports = router;