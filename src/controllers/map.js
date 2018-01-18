const map = (req,res)=>{
  console.log("nbv",req.user);
  res.status(200).render('map');
}
module.exports = {map}
