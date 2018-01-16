const dbConnection = require('./dbConnection');
const fs = require ('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, '/build.sql'));

dbConnection.query(sql, (err, res)=>{
  if (err) console.log(err);
  else{
    console.log('res');
  }
})
