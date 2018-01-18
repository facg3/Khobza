const dbConnection = require('./db_connection');

const makesuggestion = (user_id,suggestion,cb) => {
  const sql = {
    text:'INSERT INTO  suggestions(user_id ,suggestion) VALUES ($1,$2)',
    values:[user_id , suggestion ]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
}

module.exports = {
makesuggestion};
