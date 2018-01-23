const dbConnection = require('../databse/db_connection');


const GetProduct = (cb) => {
  const sql = 'SELECT * FROM products';
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const makeOrder = (iduser,idproduct,amount ,cb) => {
  const sql = {
    text:'INSERT INTO orders(user_id,product_id,amount) VALUES($1,$2,$3) RETURNING * ',
    values:[iduser,idproduct,amount]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const cart = (user_id,cb) => {
  const sql = {
    text:'SELECT orders.*,products.name ,products.price,products.description,users.name as username from orders,products,users where users.id=orders.user_id and products.id=orders.product_id and users.id=$1',
    values:[user_id]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const total = (user_id,cb) => {
  const sql = {
    text:'SELECT SUM(products.price) from orders,products,users where users.id=orders.user_id and products.id=orders.product_id and users.id=$1',
    values:[user_id]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
const deleteOrder = (id,cb) => {
  const sql = {
    text:'DELETE FROM orders WHERE id = $1 RETURNING * ',
    values:[id]
};
dbConnection.query(sql, (err, res) => {
  if (err) cb(err);
  cb(null, res.rows);
});
}
const makesuggestion = (user_id,suggestion,cb) => {
  const sql = {
    text:'INSERT INTO  suggestions(user_id ,suggestion) VALUES ($1,$2)',
    values:[user_id , suggestion ]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};
const allsuggestion = (cb) => {
  const sql = 'SELECT suggestions.*, users.name ,users.phone_number From suggestions ,users where suggestions.user_id = users.id ';
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};
module.exports = {
GetProduct,makeOrder,cart,deleteOrder,makesuggestion ,allsuggestion,total
};
