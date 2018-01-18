const err = (req,res)=>{
  res.status(200).render('error',{layout:false});
}
module.exports=err;
