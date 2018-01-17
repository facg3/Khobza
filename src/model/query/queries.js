const dbConnection = require('../databse/db_connection');


const GetProduct = (cb) => {
  const sql = 'SELECT * FROM products';
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};
const makeOrder = (iduser,idproduct,amount,cb) => {
  const sql = {
    text:'INSERT INTO orders(user_id,product_id,amount) VALUES($1,$2,$3)',
    values:[iduser,idproduct,amount]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};
module.exports = {
GetProduct,makeOrder
};
