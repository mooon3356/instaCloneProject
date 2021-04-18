var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

// * POST /users/login
router.post('/signup', usersController.signup.post)

router.post('/signin', usersController.signin.post);

// * POST /users/logout
// router.post('/signout', usersController.signout.post);

// * get /users/userinfo
router.get('/user', usersController.user.get);

module.exports = router;
