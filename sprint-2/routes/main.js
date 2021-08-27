const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/home', (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'home.html')));
router.get('/productDetail', (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'productDetail.html')));
router.get('/productCart', (req,res) => res.sendFile(path.join(__dirname, '..', 'views', 'productCart.html')));


module.exports = router