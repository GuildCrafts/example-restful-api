const router = require('express').Router()

const { questions } = require('../db/queries.js')
const { handleError } = require('../utils.js')

// Questions API routes
// These will be mounted to /questions path

// Get all questions => GET /questions
router.get('/', (req, res) => {
  questions.all()
    .then((results) => {
      res.json(results)
    })
    .catch(handleError(res))
})

// Create a question => POST /questions
router.post('/', (req, res) => {
  const {text, userID, topicID} = req.body

  questions.create({text, userID, topicID})
    .then(() => {
      res.json({message: 'Question posted successfully.'})
    })
    .catch(handleError(res))
})

// Get one question (by its id) => GET /questions/:id
router.get('/:id', (req, res) => {
  const questionID = req.params.id

  questions.get(questionID)
    .then((questionResult) => {
      if (!questionResult) {
        res.json({message: `Question with id ${questionID} not found.`})
        return
      }
      res.json(questionResult)
    })
    .catch(handleError(res))
})

// Update a question => PUT /questions/:id
router.put('/:id', (req, res) => {
  const questionID = req.params.id
  const {text, topicID} = req.body

  questions.update(questionID, {text, topicID})
    .then(() => res.json({message: 'Question updated successfully.'}))
    .catch(handleError(res))
})

// Delete a question => DELETE /questions/:id
router.delete('/:id', (req, res) => {
  questions.delete(req.params.id)
    .then(() => res.json({message: 'Question deleted'}))
    .catch(handleError(res))
})

module.exports = router
