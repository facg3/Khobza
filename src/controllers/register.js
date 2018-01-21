const hashpassword = require('./password.js');
const auth = require('../model/query/auth.js');
const GETregister = (req,res, next)=>{
    res.render('register',{
      layout:false
    });
  }
const PostRegister = (req, res)=>{
  const name = req.body.name;
  const number = req.body.numb;
  const password = req.body.password;
  const conPassword = req.body.password_conf;
  if (password === conPassword) {
    hashpassword.hashedPassword(password, (err, hash)=>{
      auth.insertData(name,number,hash,(err,response)=>{
        res.redirect('/');
      });
    });
  }else{
    res.render('register',{err:true,mssg:'Passwords do not match',layout:false});
  }
}
module.exports = {GETregister, PostRegister}
