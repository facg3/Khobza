const queries = require('../model/query/queries');
const homepage = (req,res)=>{
queries.GetProduct( (err , products)=>{
  if(err){
    console.log(err);
  }
  else {
    res.status(200).render('homepage',{products:products});
  }
});
}
const POSThomepage =(req,res)=>{
  const idproduct = req.body.idproduct;
  const amount = req.body.quantity;
  queries.makeOrder(req.user.id,idproduct,amount,(err,res)=>{
    if (err) {
      // res.redirect('/error')
      console.log(err);
    }else
    res.status(200).redirect('/');
  });
}
module.exports = {homepage,POSThomepage}
