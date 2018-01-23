const queries = require('../model/query/queries');
const len = (req,res)=>{
queries.ordersCount(req.user.id,(err,len)=>{
   res.status(200).render('header', {len:len});
});
}

module.exports=len
