const express=require('express');
const multer = require('multer');
const admincontroler=require('../../controler/admin/admin')
const router=express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/upload/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
const upload = multer({ storage: storage });
router.get('/',admincontroler.admin);
router.get('/editinformation',admincontroler.edit);
router.post('/update',upload.fields([{name:'daidien'},{name:'hinhnen'}]),admincontroler.update)
////education
router.get('/education',admincontroler.education);
router.get('/education/:ID',admincontroler.deleteeducation);
router.get('/information-education/:ID',admincontroler.informationeducation)
router.get('/edit-education/:ID',admincontroler.editeducation);
router.post('/edit-education/:ID',admincontroler.editinfeducation);
router.post('/education',admincontroler.createeducation)
////skills
router.get('/skills',admincontroler.skills);
router.get('/skills/:ID',admincontroler.deleteskills);
router.get('/edit-skills/:ID',admincontroler.editskills);
router.post('/edit-skills/:ID',admincontroler.editinfskills);
router.post('/skills',admincontroler.createskills);
////experience
router.get('/experience',admincontroler.experience);
router.get('/information-experience/:ID',admincontroler.informationexperience)
router.get('/edit-experience/:ID',admincontroler.editexperience);
router.get('/delete-experience/:ID',admincontroler.deleteexperience);
router.post('/edit-experience/:ID',admincontroler.editinfexperience);
router.post('/experience',admincontroler.createexperience);
///////////profile
router.get('/profile',admincontroler.profile);
router.get('/profile/:ID',admincontroler.deleteprofile);
router.get('/edit-profile/:ID',admincontroler.editprofile);
router.post('/edit-profile/:ID',upload.single('icon'),admincontroler.editinfprofile);
router.post('/profile',upload.single('icon'),admincontroler.createprofile);
///////////portfolio
router.get('/portfolio',admincontroler.portfolio);
router.get('/portfolio/:ID',admincontroler.deleteportfolio);
router.get('/edit-portfolio/:ID',admincontroler.editportfolio);
router.post('/edit-portfolio/:ID',upload.single('hinhanh'),admincontroler.editinfportfolio);
router.post('/portfolio',upload.single('hinhanh'),admincontroler.createportfolio);
/////////client
router.get('/client',admincontroler.client);
router.get('/client/:ID',admincontroler.deleteclient);
router.get('/edit-client/:ID',admincontroler.editclient);
router.post('/edit-client/:ID',upload.single('logo'),admincontroler.editinfclient);
router.post('/client',upload.single('logo'),admincontroler.createclient);
///////////CONTACT
router.get('/contact',admincontroler.contact);
router.get('/contact/:ID',admincontroler.deletecontact);
router.get('/fullcontact/:ID',admincontroler.fullcontact);
router.post('/contact',admincontroler.createcontact);
/////////////SOCIAL
router.get('/soicial',admincontroler.soicial);
router.get('/soicial/:ID',admincontroler.deletesoicial);
router.get('/edit-soicial/:ID',admincontroler.editsoicial);
router.post('/edit-soicial/:ID',upload.single('logo'),admincontroler.editinfsoicial);
router.post('/soicial',upload.single('logo'),admincontroler.createsoicial);

module.exports=router;