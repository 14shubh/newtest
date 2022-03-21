var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController');
/* GET Requests */
router.get('/', indexController.homepage);
router.get('/sign-in', indexController.SignInPage);
router.get('/sign-up', indexController.SignUpPage);
router.get('/sign-out', indexController.SignOut);


/* Post Requests */
router.post('/sign-in', indexController.SignInPost);
router.post('/sign-up', indexController.SignUpPost);

module.exports = router;
