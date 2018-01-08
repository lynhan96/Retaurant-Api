const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const checkHeaders = require('./middlewares/checkHeaders')
const routes = require('./routes/routes')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(checkHeaders)

routes(app)

app.listen(port)
