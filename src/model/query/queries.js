const dbConnection = require('./db_connection');


const getGame = (name, cb) => {
  const sql = {
    text: 'select url from games where name LIKE $1;',
    values: [`%${name}%`],
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};


const recentGame = (cb) => {
  const sql = 'SELECT url FROM games ORDER BY id DESC LIMIT 1';
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};


const addGame = (name, url, cb) => {
  const sql = {
    text: 'INSERT INTO games (name, url) VALUES ($1, $2)',
    values: [name, url]
  };

  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};
module.exports = {
  getGame,
  addGame,
  recentGame
};
