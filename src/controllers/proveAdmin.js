const auth = require('../model/query/auth');
const verifyCookie = (req, res, next) =>{
  const {role,id,name} = req.user
  console.log('role,id,name',role == 'admin');
  console.log('role,id,name',role ,id ,name );
  console.log(typeof id);
  if(role === 'admin' && id === 1){
        next();
    }
  
  else{
    res.redirect('/error');
  }
}
module.exports = verifyCookie;
