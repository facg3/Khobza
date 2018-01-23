const hashpassword = require('./password.js');
const auth = require('../model/query/auth.js');
const Getlogin = (req,res)=>{
  res.render('login',{
    layout:false
  });
}
const PostLogin = (req,res)=>{
  const { phone } = req.body;
  const password = req.body.password_l;
  auth.selectData(phone,(err,data)=>{
    if(err) {res.render("error", {layout:false})}
    else if(data.length == 0){
      res.render('login',{layout:false,err:true,msg:'You must register'});
    }else {
      hashpassword.comparePassword(password,data[0].password,(err,isTrue)=>{
        if(isTrue){
          res.redirect('/');
        }else {
          res.render('login',{layout:false,err:true,msg:'Password is not correct'});
        }
      });
    }
  });
}
module.exports = {Getlogin,PostLogin}
