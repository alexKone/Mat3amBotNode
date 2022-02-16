const Homepage = async (req, res, next) => {
  res.render('pages/index');
}
const Settings = async (req, res, next) => {
  res.render('pages/index', {
    link: ''
  });
}

module.exports = {
  Homepage
}
