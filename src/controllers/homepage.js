const queries = require('../model/query/queries');
const homepage = (req,res)=>{
queries.GetProduct((err , products)=>{
  if(err){
    res.redirect("/error");
  }
  else {
    res.render('homepage',{products:products});
  }
});
}
const POSThomepage =(req,res)=>{
  const { quantity, idproduct } = req.body;
  const quantityNo= quantity? quantity: 1;
    queries.makeOrder(req.user.id,idproduct,quantityNo,(err,data)=>{
    if (err) {
      res.render("error" , {error:err.toString() , layout:false});
    }else
    queries.GetProduct((err , products)=>{
      if(err){
        console.log(err);
      }
      else {
        res.status(200).render('homepage',{products:products});
      }
    });
  });

}
module.exports = {homepage,POSThomepage}
