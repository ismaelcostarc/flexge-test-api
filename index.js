require('dotenv/config')
const express = require('express')
const logger = require('./logger')
const mongoose = require('mongoose')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

/* app.use('/api', require('./src/companies/routes'))
app.use('/api', require('./src/contracts/routes'))
app.use('/api', require('./src/products/routes'))
 */
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => logger.error(err))
