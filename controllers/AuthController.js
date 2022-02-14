const e = require("express");
const { COOKIE_USER_NAME, COOKIE_USER_TOKEN } = require("../config");
const { auth, db } = require("../fb");

const getLogin = async (req, res, next) => {
  res.render('pages/auth/login');
}
const getSignUp = async (req, res, next) => {
  res.render('pages/auth/signup');
}

postSignUp = async (req, res, next) => {
  try {
    const { email, password, phoneNumber } = req.body;
    const userRecord = await auth.createUser({ email, phoneNumber, password });

    const docRef = db.collection('users').doc();
    await docRef.set({
      email: userRecord.email,
      userId: userRecord.uid,
      phoneNumber: userRecord.phoneNumber
    })

    const customToken = await auth.createCustomToken(userRecord.uid)
    await res.cookie(COOKIE_USER_NAME, userRecord.uid)
    await res.cookie(COOKIE_USER_TOKEN, customToken)
    await res.redirect('/')

  } catch (error) {
    res.render('pages/auth/signup', {
      error: true,
      errorMessage: error.message
    })
  }
}

module.exports = {
  getLogin,
  getSignUp,
  postSignUp
}