const router = require('express').Router();
const Authenticate = require('../middleware/adminAuthenticate');
const categoryController = require('../controller/categoryController');
const multer = require('multer');
const upload = multer ({dest : 'public/images/category-images'});

router.get('/add-category',Authenticate.isAuthenticate,upload.single('categoryImage'),categoryController.AddCategoryPost);

module.exports = router;