const express = require('express');
const { getLogin, getSignUp, postSignUp, postLogin } = require('../controllers/AuthController');
const { Homepage } = require('../controllers/PageController');

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignUp);
router.post('/signup', postSignUp);

router.get('/', Homepage);

module.exports = {
  routes: router
}