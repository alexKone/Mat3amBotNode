const express = require('express');
const { getLogin, getSignUp } = require('../controllers/AuthController');

const router = express.Router();

router.get('/login', getLogin);
router.get('/signup', getSignUp);

module.exports = {
  routes: router
}