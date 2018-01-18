const suggestion = (req,res)=>{
  res.status(200).render('suggestion');
}
const makesuggestion = (req,res) =>{
const suggestionResult = req.body.suggestion;
query.makesuggestion(1,suggestionResult,(errorConnectingToDB , Result) => {
  if (errorConnectingToDB) {
    console.log(err);
  }
  else{
    res.render();
      res.redirect('/');
  }
});

}

module.exports= {suggestion,makesuggestion} ;
