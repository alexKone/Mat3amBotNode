const express = require('express');
const { getLogin, getSignUp, postSignUp, postLogin } = require('../controllers/AuthController');
const { Homepage } = require('../controllers/PageController');
const {SettingsPage} = require("../controllers/profile/ProfileController");
const { currentUser } = require('../middlewares/currentUser');

const router = express.Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/signup', getSignUp);
router.post('/signup', postSignUp);


// Settings Routes
router.get('/settings', currentUser, SettingsPage)

router.get('/',currentUser, Homepage);

module.exports = {
  routes: router
}
