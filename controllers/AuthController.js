const { signInWithEmailAndPassword } = require("firebase/auth");
const {
  COOKIE_USER_NAME,
  COOKIE_USER_TOKEN
} = require("../config");
const {
  auth,
  db
} = require("../fb");


const getLogin = async (req, res, next) => {
  res.render('pages/auth/login');
}
const postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      debugger;
      // console.log('userCredential => ', userCredential.user.accessToken);
      res.cookie(COOKIE_USER_TOKEN, userCredential.user.accessToken);
      res.cookie(COOKIE_USER_NAME, userCredential.user.uid);

      res.redirect('/');
    })
    .catch(error => {
      res.render('pages/auth/login', {
        error: true,
        errorMessage: 'Verify your infos'
      })
    })
}

const getSignUp = async (req, res, next) => {
  res.render('pages/auth/signup');
}

const postSignUp = async (req, res, next) => {
  try {
    const {
      email,
      password,
      phoneNumber
    } = req.body;
    const userRecord = await auth.createUser({
      email,
      phoneNumber,
      password
    });

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

const logout = async (req, res, next) => {
  auth.signOut();
  res.cookie(COOKIE_USER_NAME, '')
  res.cookie(COOKIE_USER_TOKEN, '')
  res.redirect('/login')
}

module.exports = {
  getLogin,
  getSignUp,
  postSignUp,
  postLogin,
  logout
}