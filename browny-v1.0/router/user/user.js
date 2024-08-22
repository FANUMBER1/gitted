const express = require('express');
const usercontroler=require('../../controler/user/user');
const router=express.Router();
router.get('/',usercontroler.user);
module.exports=router;