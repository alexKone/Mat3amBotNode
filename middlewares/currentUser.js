const currentUser = (req, res, next) => {
  res.locals.user = JSON.parse(req.cookies['user'])
  next()
}

module.exports = {
  currentUser
}