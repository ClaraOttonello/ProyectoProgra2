var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/me', controller.profile);
router.get('/me/edit', controller.edit);

module.exports = router;

module.exports = router;
