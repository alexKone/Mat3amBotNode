const express = require('express');
const { getLogin, getSignUp } = require('../controllers/AuthController');
const { Homepage } = require('../controllers/PageController');

const router = express.Router();


router.get('/', Homepage);

router.get('/login', getLogin);
router.get('/signup', getSignUp);

module.exports = {
  routes: router
}