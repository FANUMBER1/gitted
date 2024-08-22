const express = require('express');
const logincontroler=require('../../controler/login/login');
const router=express.Router();
router.get('/',logincontroler.dangnhap);
router.post('/',logincontroler.checklogin);
router.get('/dangki',logincontroler.dangki);
router.post('/dangki',logincontroler.createadmin);
router.get('/logout',logincontroler.logout)
module.exports=router;