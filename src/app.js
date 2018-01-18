const express = require ('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const controllers = require('./controllers/index');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');
app.engine('hbs',exphbs({
  extname:'hbs',
  layoutsDir:path.join(__dirname,'views','layouts'),
  partialsDir:path.join(__dirname,'views','partials'),
  defaultLayout:'main'
}));

app.use(cookieParser());
app.use(controllers);
app.use((req, res, next)=>{
  if(!req.url == '/login' && !req.url =='/register'){
    jwt.verifiy(req.cookies.accessToken,process.env.SECRET_KEY,(err,decoded)=>{
      if (err) {
        res.clearCookie('accessToken').redirect('/login');
      }else {
        req.decoded = decoded;
      }
    });
  }
  next();
})
app.set('port', process.env.PORT || 3000);
module.exports=app;
