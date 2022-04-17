var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')

router.get('/me/edit', controller.edit);
router.get('/me', controller.profile);


module.exports = router;