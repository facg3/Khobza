const logout = (req,res)=>{
  res.status(200).render('login',{ layout:false});
}
module.exports=logout
