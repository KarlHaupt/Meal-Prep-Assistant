const express = require('express');
const router = express.Router();

// const { loginUser, registerUser } = require('../controllers/userController');
// router.route('/login').post(loginUser);
// router.route('/register').post(registerUser);

const {registerView, loginView } = require('../controllers/userController');
router.get('/register', registerView);
router.get('/login', loginView);

module.exports = router;