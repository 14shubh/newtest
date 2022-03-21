const express = require('express');
const router = express.Router();
const Authenticate = require('../middleware/adminAuthenticate');
const adminController = require('../controller/adminController');

router.get('/',adminController.SignInPage);
router.get('/dashboard',adminController.DashboardPage)
router.get('/add-products',Authenticate.isAuthenticate,adminController.AddProductPage);
router.post('/sign-in',adminController.SignInPost);

module.exports = router;