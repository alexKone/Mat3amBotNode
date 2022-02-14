const express = require('express');
const { getLogin, getSignUp, postSignUp } = require('../controllers/AuthController');
const { Homepage } = require('../controllers/PageController');

const router = express.Router();


router.get('/', Homepage);

router.get('/login', getLogin);
router.get('/signup', getSignUp);
router.post('/signup', postSignUp);

module.exports = {
  routes: router
}