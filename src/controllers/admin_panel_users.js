const queries = require('../model/query/queries');

const panel_users = (req,res)=>{
  queries.user(req.user.id,(err,data)=>{
     res.status(200).render('admin_panel_users',{data:data});
  });
  }



module.exports = {panel_users}