require('dotenv-safe').config()
const express = require('express')
const logger = require('./logger')
const mongoose = require('mongoose')
const app = express()
const createRoutes = require('./api')

app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

createRoutes(app)

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(process.env.SERVER_PORT)
  })
  .catch(err => logger.error(err))
