const register = require('./register');
const login = require('./login');
const homepage = require('./homepage');
const suggestion = require('./suggestion');
const cart = require('./cart');
const map = require('./map.js');
const logout = require('./logout');
const express = require('express');
const router = express.Router();
router.get('/login',login.GETlogin);
router.post('/login',login.PostLogin);
router.get('/register',register.GETregister);
router.post('/register',register.PostRegister);
router.get('/',homepage.homepage);
router.get('/map',map.map);
router.get('/suggestion',suggestion.suggestion);
router.get('/cart',cart);
router.get('/logout',logout);



module.exports = router;
