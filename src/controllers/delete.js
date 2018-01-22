const queries = require('../model/query/queries');
const deletee = (req,res) =>{
  const { id } = req.body
  console.log(id,"id");
  queries.deleteOrder(id,(err,data)=>{
    queries.cart(req.user.id,(err,data)=>{
       res.status(200).render('cart',{data:data});
    });
  });
}
module.exports = deletee;
