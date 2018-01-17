const bcrypt = require('bcryptjs');

const hashedPassword = passowrd => {
  bcrypt.gensalt(20, (err, salt)=>{
    if (err) {
      console.log(err);
    }else {
  bcrypt.hash = (password, salt, (err, hash)=>{
    if (err) {
      console.log(err);
    }else{
      return hash;
    }
  })
    }
  })
}
const comparePassword = (password, hashedPassword, callback) =>{
  bcrypt.compare(password, hashedPassword, callback);

}
modules.exports = {
  hashedPassword,
  comparePassword
}
