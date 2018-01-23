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
const cart = (product_id,cb) => {
  const sql = {
    text:`SELECT
    orders.*,products.name ,products.price,products.description,
    users.name as username from orders,products,users
    where
    users.id=orders.user_id and
    products.id=orders.product_id and
    users.id=$1`,
    values:[product_id]
  };
  dbConnection.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res.rows);
  });
};

const deleteOrder = (product_id, user_id) =>{
  const sql = {
    text:'DELETE FROM orders WHERE users.id = $2 and products.id = $1',
    values: [product_id,user_id]
  };
  dbConnection.query(sql, (err, res)=>{
    if(err) cb(err);
    cb(null, res.rows);
  });
};

const ordersCount = (user_id) =>{
  const sql = {
    text: 'SELECT COUNT(user_id) FROM table_name WHERE user_id = $1;',
    values : [user_id]
  };
dbConnection.query(sql, (err, res)=>{
  if(err) cb(err);
  cb(null, res.rows);
});
}


module.exports = {
GetProduct,makeOrder,cart
, makesuggestion};
