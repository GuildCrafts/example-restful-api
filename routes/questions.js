const router = require('express').Router()

const { questions } = require('../db/queries.js')
const { handleError } = require('../utils.js')

// Questions API routes
router.get('/', (req, res) => {
  questions.all()
    .then((results) => {
      res.json(results)
    })
    .catch(handleError(res))
})

module.exports = router
