const connection = require('../database/dbconnection.js');
const insertData = (mobile, passowrd)=> {
  const sql ={
    text : `select * from users where username = $1 and password = $2`
    values : [mobile, passowrd];
  }
  connection.query(sql, (err, data)=>{
    if (err) console.log(err);
  }) else {
    cb(data.rows);
  }
}
module.exports = insertData;
