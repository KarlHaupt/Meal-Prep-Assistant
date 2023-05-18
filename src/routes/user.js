const express = require('express');
const router = express.Router();

const { registerView, loginView, loginUser, registerUser } = require('../controllers/userController');

router.get('/register', registerView);
router.get('/login', loginView);
router.post('/auth/login', loginUser);
router.post('/auth/register', registerUser);

module.exports = router;