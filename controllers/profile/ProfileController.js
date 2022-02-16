const { getUserByUid } = require("../../helpers/firebaseAdminHelpers");

const getSettingsPage = async (req, res) => {
  res.render('pages/settings/index', {
    user: res.locals.user,
    currentUrl: res.locals.urlHost,
    title: 'Settings'
  })
}

const getEditProfile = async (req, res) => {
  res.render('pages/settings/profile/edit', {
    user: res.locals.user,
    currentUrl: res.locals.urlHost,
    title: 'Edit Profile'
  })
}


module.exports = {
  getSettingsPage,
  getEditProfile
}