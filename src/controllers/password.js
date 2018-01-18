const bcrypt = require('bcrypt');
const hashedPassword = (password, cb) => {
  bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
      cb(err, hash);
    })
  })
}

const comparePassword = (password, hashedPassword, cb) =>{
  bcrypt.compare(password, hashedPassword, (err,res)=>{
    cb(null,res);
  });

}
module.exports = {
  hashedPassword,
  comparePassword
}
