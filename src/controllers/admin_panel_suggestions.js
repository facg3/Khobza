const queries = require('../model/query/queries');
const panel_suggestions = (req,res)=>{
  queries.allsuggestion((err,data)=>{
    console.log(data,'SuGGestion');
     res.status(200).render('admin_panel_suggestions',{data:data ,layout:false});
  });
  }





module.exports = panel_suggestions
