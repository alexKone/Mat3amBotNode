const getLogin = async (req, res, next) => {
  res.render('pages/auth/login');
}
const getSignUp = async (req, res, next) => {
  res.render('pages/auth/login');
}


module.exports = {
  getLogin,
  getSignUp
}