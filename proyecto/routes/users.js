var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')
const multer= require('multer');
const path= require('path');

let store = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,path.join(__dirname, "../public/img/uploads")) 
    },
    filename: (req,file,cb)=> {
        cb(null,file.fieldname + '-'+ Date.now()+path.extname(file.originalname)) 
    },
})
let upload= multer ({storage:store})

router.get('/me/edit', controller.edit);
router.get('/me', controller.profile);
router.get('/login', controller.login);
router.post('/login', controller.access);
router.get('/register', controller.register);
router.post('/register',upload.single('img'), controller.store);


module.exports = router;