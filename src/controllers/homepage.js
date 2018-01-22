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
    queries.makeOrder(req.user.id,idproduct,quantity,(err,data)=>{
    if (err) {
      res.redirect("/error");
    }else
    queries.GetProduct((err , products)=>{
      if(err){
          res.redirect("/error");
      }
      else {
        res.status(200).render('homepage',{products:products,icon:true});
      }
    });
  });

}
module.exports = {homepage,POSThomepage}
