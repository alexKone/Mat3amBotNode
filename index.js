const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const pageRoutes = require('./routes/page-routes')
const bodyParser = require('body-parser')
const { currentUrl } = require('./middlewares/currentUrl')
const PORT = process.env.PORT || 5000

express()
  .use(express.json())
  .use(express.static(path.join(__dirname, 'public')))
  .use(morgan('dev'))
  .use(cookieParser())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'twig')
  .use('*', currentUrl)
  .use('/', pageRoutes.routes)
  // .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
