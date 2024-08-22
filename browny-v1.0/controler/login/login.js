const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const login=require('../../model/login/login');
app.set('view engine', 'ejs');
module.exports={
    dangnhap:(req, res) => {
        check=1;
        res.render('dangnhap')
    },
    checklogin: async (req, res) => {
        const data= await login.taikhoan();
        const tentaikhoan=req.body.username;
        const pass1=req.body.password;
        var check=0;
        for(var i=0; i<data.length;i++){
          const match = await bcrypt.compare(pass1, data[i].pass);
            if(tentaikhoan==data[i].tentaikhoan && match){
              check=1;     
            }}
        if(check==1){
          req.session.userId = 123123;
          res.redirect('/admin')
        }else{
          res.render('dangnhap',{check});
        }
    },
    dangki:(req,res)=>{
        check=1;
        res.render('dangki')
    },
    createadmin:async(req,res)=>{
        const taikhoan=req.body.taikhoan;
        const pass0=req.body.pass;
        var check=0;
        if(taikhoan=='' || pass0==''){
        res.render('dangki',{check})
        }else{const pass = bcrypt.hashSync(pass0, 10);
          const creat= await login.createadmin(taikhoan,pass);
          res.redirect('/login');}
      },
      logout: (req, res) => {
        req.session.destroy(err => {
          if (err) {
            console.error('Error destroying session:', err);
          }
          res.clearCookie('connect.sid');
          res.redirect('/login');
        });
      }
}