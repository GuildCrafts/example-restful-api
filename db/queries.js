const pgp = require('pg-promise')()

const databaseName = 'kwora'

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: databaseName,
})

const questions = {
  all: () => db.any("SELECT * FROM questions;"),

  get: (id) => db.oneOrNone("SELECT * FROM questions WHERE id = $1;", id),

  create: ({text, userID, topicID}) => {
    return db.none(`
      INSERT INTO questions (text, posted_by_id, topic_id)
      VALUES ($[text], $[userID], $[topicID]);
    `, {text, userID, topicID})
  },

  update: (id, {text, topicID}) => {
    return db.none(`
      UPDATE questions
      SET
        text = $[text],
        topic_id = $[topicID]
      WHERE questions.id = $[id];
    `, {id, text, topicID})
  },

  delete: (id) => db.none("DELETE FROM questions WHERE id = $1;", id),
}

const answers = {
  allForQuestion: (questionID) => {
    return db.any("SELECT * FROM answers WHERE question_id = $1;", questionID)
  },

  get: (id) => db.oneOrNone("SELECT * FROM answers WHERE id = $1;", id),

  create: ({text, userID, questionID}) => {
    return db.none(`
      INSERT INTO answers (text, posted_by_id, question_id)
      VALUES ($[text], $[userID], $[questionID]);
    `, {text, userID, questionID})
  },

  update: (id, {text, questionID}) => {
    return db.none(`
      UPDATE answers
      SET
        text = $[text],
        question_id = $[questionID]
      WHERE answers.id = $[id];
    `, {id, text, questionID})
  },

  delete: (id) => db.none("DELETE FROM answers WHERE id = $1;", id),
}

module.exports = {
  questions,
  answers
}
