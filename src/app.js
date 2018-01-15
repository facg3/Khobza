const express = require ('express');
const bodyParser = require('body-parser');
const path = require ('path');

const app = express();

app.use('/', (req,res)=>{
   res.send();
})

app.listen(3000, ()=>{
  console.log('App Started at Port 3000 ');
})
