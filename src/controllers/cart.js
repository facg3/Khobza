const queries = require('../model/query/queries');
const cart = (req,res)=>{
queries.cart(req.user.id,(err,data)=>{
  console.log("data",data);
   res.status(200).render('cart',{data:data});
});
}

module.exports=cart
