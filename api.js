const express = require('express')
const bodyParser = require('body-parser')

const questions = require('./routes/questions.js')

const api = express()

api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())

api.use('/questions', questions)

if (!module.parent) {
  const port = process.env.PORT || 3000

  api.listen(port, function () {
    console.log(`Kwora API listening on port ${port}!`)
  })
}

module.exports = { api }
