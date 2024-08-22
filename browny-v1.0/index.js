const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const body=require('body-parser')
const methodOverride = require('method-override');
const port = 4444;
const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
var cookieParser = require('cookie-parser');
const session = require('express-session');
const { createRequire } = require('module');
////router
const userrouter=require('./router/user/user');
const adminrouter=require('./router/admin/admin');
const login=require('./router/login/login')
const middlewea=require('./middlewea/middlewea');
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './assets/upload/');
   },
   filename: function (req, file, cb) {
     cb(null, Date.now() + '-' + file.originalname);
   }
 });
const upload = multer({ storage: storage }); 
app.set('view engine', 'ejs');
//use
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(methodOverride());
///Cấu hình express-session
app.use(cookieParser());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));
///ROUTER
app.use('/',userrouter);
app.use('/admin',middlewea.requireLogin,adminrouter);
app.use('/login',login);
///////////
app.listen(port,()=> {
    console.log(`Server is running on http://localhost:${port}`);
});
   


