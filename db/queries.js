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

module.exports = {
  questions
}
