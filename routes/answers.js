const router = require('express').Router()

const { answers } = require('../db/queries.js')
const { handleError } = require('../utils.js')

// Answers API routes
// These will be mounted to /questions/:question_id/answers path

// Get all answers for question => GET /answers
router.get('/', (req, res) => {
  const questionID = req.params.question_id

  answers.allForQuestion(questionID)
    .then((results) => {
      res.json(results)
    })
    .catch(handleError(res))
})

// Create an answer for a question => POST /answers
router.post('/', (req, res) => {
  const questionID = req.params.question_id
  const {text, userID} = req.body

  answers.create({text, userID, questionID})
    .then(() => {
      res.json({message: 'Answer posted successfully.'})
    })
    .catch(handleError(res))
})

// Get one answer (by its id) => GET /answers/:id
router.get('/:id', (req, res) => {
  const answerID = req.params.id

  answers.get(answerID)
    .then((answerResult) => {
      if (!answerResult) {
        res.json({message: `Answer with id ${answerID} not found.`})
        return
      }
      res.json(answerResult)
    })
    .catch(handleError(res))
})

// Update a answer => PUT /answers/:id
router.put('/:id', (req, res) => {
  const answerID = req.params.id
  const {text, questionID} = req.body

  answers.update(answerID, {text, questionID})
    .then(() => res.json({message: 'Answer updated successfully.'}))
    .catch(handleError(res))
})

// Delete a answer => DELETE /answers/:id
router.delete('/:id', (req, res) => {
  answers.delete(req.params.id)
    .then(() => res.json({message: 'Answer deleted'}))
    .catch(handleError(res))
})


module.exports = router
