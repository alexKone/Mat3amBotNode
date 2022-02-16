const currentUrl = async (req, res, next) => {
  res.locals.urlHost = req.protocol + '://' + req.get('host')
  next()
}

module.exports = {
  currentUrl
}