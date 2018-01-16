const GETregister = (req,res)=>{
  res.status(200).render('register',{
    layout:false
  });
}
module.exports = {GETregister}
