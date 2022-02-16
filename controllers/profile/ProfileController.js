const { getUserByUid } = require("../../helpers/firebaseAdminHelpers")

const SettingsPage = async (req, res) => {
  res.render('pages/settings/index', {
    user: res.locals.user
  })
}


module.exports = {
  SettingsPage
}
