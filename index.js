const express = require('express')
const path = require('path')
const pageRoutes = require('./routes/page-routes')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'twig')
  .use('/', pageRoutes.routes)
  // .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
