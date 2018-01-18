const register = require('./register');
const login = require('./login');
const homepage = require('./homepage');
const suggestion = require('./suggestion');
const cart = require('./cart');
const map = require('./map.js');
const logout = require('./logout');
const express = require('express');
const error = require('./error');
const router = express.Router();
router.get('/login',login.GETlogin);
router.get('/register',register.GETregister);
router.get('/home',homepage.homepage);
router.post('/home',homepage.POSThomepage);
router.get('/map',map.map);
router.get('/suggestion',suggestion.suggestion);
router.get('/cart',cart);
router.get('/error',error);
router.get('/logout',logout);



module.exports = router;
