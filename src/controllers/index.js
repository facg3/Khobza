const register = require('./register');
const login = require('./login');
const homepage = require('./homepage');
const verfiycookie = require('./verfiycookie');
const suggestion = require('./suggestion');
const cart = require('./cart');
const map = require('./map.js');
const logout = require('./logout');
const express = require('express');
const error = require('./error');
const router = express.Router();
router.get('/login',login.Getlogin);
router.post('/login',login.PostLogin);
router.get('/register',register.GETregister);
router.post('/register',register.PostRegister);
router.get('/',verfiycookie,homepage.homepage);
router.post('/',verfiycookie,homepage.POSThomepage);
router.get('/map',verfiycookie,map.map);
router.get('/suggestion',verfiycookie,suggestion.suggestion);
router.get('/cart',verfiycookie,cart);
router.get('/logout',logout);
router.get('*',error);



module.exports = router;
