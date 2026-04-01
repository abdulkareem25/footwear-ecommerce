const express = require('express');
const { signUp, signIn, getMe } = require('../controllers/auth.controllers');
const identifyUser = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

router.get('/get-me', identifyUser, getMe);

// router.post('/sign-out', signOut);

module.exports = router;