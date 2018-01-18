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
  queries.makeOrder('1',idproduct,amount,(err,res)=>{
    if (err) {
      // res.redirect('/error')
      console.log(err);
    }else
    res.status(200).redirect('/home');
  });
}
module.exports = {homepage,POSThomepage}
