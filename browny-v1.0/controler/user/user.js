const express = require('express');
const app = express();
const admin=require('../../model/admin/admin');
app.set('view engine', 'ejs');
module.exports={
    user:async(req,res)=>{
        const profile= await admin.admin();
        const education= await admin.education();
        const skill= await admin.skills();
        const experience=await admin.experience();
        const profile2= await admin.profile();
        const duan= await admin.portfolio();
        const client= await admin.client();
        res.render('index',{profile1:profile[0],education:education,
          skill:skill,experience:experience,profile2:profile2,duan:duan,client:client});
    }
}