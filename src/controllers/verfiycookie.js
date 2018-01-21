const jwt = require('jsonwebtoken');
require('env2')('./config.env');
const verifyCookie = (req, res,next) =>{
  if (req.cookies.accessToken === undefined) {
    console.log('req.cookies',req.cookies.accessToken);
     res.redirect('/login');
  }else{
      jwt.verify(req.cookies.accessToken,process.env.SECRET_KEY,(err,decoded)=>{
        if (err) {
          res.clearCookie('accessToken');
          res.redirect('/login');
        }else {
          req.user = decoded;
          next();
        }
      });
}
// else {
//   next();
// }

}
module.exports = verifyCookie;
