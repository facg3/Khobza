const suggestion = (req,res)=>{
  res.status(200).render('suggestion');
}
const makesuggestion = (req,res) =>{
const suggestionResult = req.body.suggestion;
query.makesuggestion(1,suggestionResult,(err,Result) => {
  if (errorConnectingToDB) {
    return res.send('errorConnectingToDB');
  }
  return res.send(suggestionResult);
});

}

module.exports= {suggestion,makesuggestion} ;
