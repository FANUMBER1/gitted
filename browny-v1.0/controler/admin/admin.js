const express=require('express');
const app = express();
const router=express.Router();
const adminmodel=require('../../model/admin/admin')
app.set('view engine', 'ejs');

module.exports={
    admin:async(req,res)=>{
        const data= await adminmodel.admin();
        res.render('admin',{data:data})
    },
    edit:async(req,res)=>{
        const data= await adminmodel.admin();
        res.render('edituser',{data:data})
    },
    update: async(req,res)=>{
        const ten=req.body.ten;
        const congviec=req.body.congviec;
        const sdt=req.body.sdt;
        const gmail=req.body.gmail;
        const thongtin1=req.body.thongtin1;
        const thongtin2=req.body.thongtin2;
        const daidien1=req.files.daidien[0];
        const hinhnen1=req.files.hinhnen[0];
        const update=adminmodel.update(ten, congviec,sdt,gmail,thongtin1,thongtin2,daidien1,hinhnen1)
        res.redirect('/admin');
     },
     education:async(req,res)=>{
        const data= await adminmodel.education();
        res.render('education',{data:data})
    },
    createeducation:async(req,res)=>{
        const bangcap=req.body.bangcap;
        const nam=req.body.nam;
        const daihoc=req.body.daihoc;
        const diachi=req.body.diachi;
        const thongtin=req.body.thongtin;
        const add=await adminmodel.createeducation(bangcap,nam,daihoc,diachi,thongtin);
        res.redirect('/admin/education');
     },
     deleteeducation: async(req,res)=>{
        const id = parseInt(req.params.ID)
        const xoa= await adminmodel.deleteeducation(id);
        res.redirect('/admin/education')
    },
    informationeducation:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.informationeducation(id);
        res.render('fulleducation',{data:data});
     },
     editeducation:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.informationeducation(id);
        res.render('editeducation',{data:data});
     },
     editinfeducation:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const bangcap=req.body.bangcap;
        const nam=req.body.nam;
        const daihoc=req.body.daihoc;
        const diachi=req.body.diachi;
        const thongtin=req.body.thongtin;
        const update=adminmodel.editeducation(id,bangcap,nam,daihoc,diachi,thongtin); 
        res.redirect('/admin/education');
     },
     skills:async(req,res)=>{
        const data= await adminmodel.skills();
        res.render('skills',{data:data})
    },
    deleteskills:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const xoa= await adminmodel.deleteskills(id);
        res.redirect('/admin/skills')
    },
    editskills:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.editskills(id);
        res.render('editskills',{data:data});
     },
     editinfskills:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const ten=req.body.ten;
        const phantram=parseInt(req.body.phantram);
        const update=await adminmodel.editinfskills(id,ten,phantram);
        res.redirect('/admin/skills')
     },
     createskills:async(req,res)=>{
        const ten=req.body.ten;
        const phantram=parseInt(req.body.phantram);
        const add=await adminmodel.createskills(ten,phantram);
        res.redirect('/admin/skills');
     },
     experience:async(req,res)=>{
        const data= await adminmodel.experience();
        res.render('experience',{data:data})
    },
    createexperience:async(req,res)=>{
        const vitricv=req.body.vitricv;
        const nam=req.body.nam;
        const tencongty=req.body.tencongty;
        const diachi=req.body.diachi;
        const mota=req.body.mota;
        const add=await adminmodel.createexperience(vitricv,nam,tencongty,diachi,mota);
        res.redirect('/admin/experience');
    },
    informationexperience:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.informationexperience(id);
        res.render('fullexperience',{data:data});
     },
     editexperience:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.informationexperience(id);
        res.render('editexperience',{data:data});
     },
     deleteexperience:async(req,res)=>{
      const id = parseInt(req.params.ID)
      const xoa= await adminmodel.deleteexperience(id);
      res.redirect('/admin/experience')
     },
     editinfexperience:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const vitricv=req.body.vitricv;
        const nam=req.body.nam;
        const tencongty=req.body.tencongty;
        const diachi=req.body.diachi;
        const mota=req.body.mota;
        const update=await adminmodel.editinfexperience(id,vitricv,nam,tencongty,diachi,mota);
        res.redirect('/admin/experience')
     },
     profile:async(req,res)=>{
        const data= await adminmodel.profile();
        res.render('profile',{data:data})
    },
    deleteprofile:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const xoa= await adminmodel.deleteprofile(id);
        res.redirect('/admin/profile')
    },
    editprofile:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.editprofile(id);
        res.render('editprofile',{data:data});
     },
     editinfprofile:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const tenweb=req.body.tenweb;
        const link=req.body.link;
        const icon=req.file.filename;
        const update=await adminmodel.editinfprofile(id,tenweb,link,icon);
        res.redirect('/admin/profile')
     },
     createprofile:async(req,res)=>{
        const tenweb=req.body.tenweb;
        const link=req.body.link;
        const icon=req.file.filename;
        const add=await adminmodel.createprofile(tenweb,link,icon);
        res.redirect('/admin/profile');
     },
     portfolio:async(req,res)=>{
        const data= await adminmodel.portfolio();
        res.render('portfolio',{data:data})
    },
    deleteportfolio:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const xoa= await adminmodel.deleteportfolio(id);
        res.redirect('/admin/portfolio')
    },
    editportfolio:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.editportfolio(id);
        res.render('editportfolio',{data:data});
     },
     editinfportfolio:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const ten=req.body.ten;
        const logo=req.file.filename;
        const update=await adminmodel.editinfportfolio(id,ten,logo);
        res.redirect('/admin/portfolio')
     },
     createportfolio:async(req,res)=>{
        const ten=req.body.ten;
        const logo=req.file.filename;
            const add=await adminmodel.createportfolio(ten,logo);
        res.redirect('/admin/portfolio');
     },
     client:async(req,res)=>{
        const data= await adminmodel.client();
        res.render('client',{data:data})
    },
    deleteclient:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const xoa= await adminmodel.deleteclient(id);
        res.redirect('/admin/client')
    },
    editclient:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const data= await adminmodel.editclient(id);
        res.render('editclient',{data:data});
     },
     editinfclient:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const ten=req.body.ten;
        const logo=req.file.filename;
        const update=await adminmodel.editinfclient(id,ten,logo);
        res.redirect('/admin/client')
     },
     createclient:async(req,res)=>{
        const ten=req.body.ten;
        const logo=req.file.filename;
            const add=await adminmodel.createclient(ten,logo);
        res.redirect('/admin/client');
     },
     contact:async(req,res)=>{
      const data= await adminmodel.contact();
      res.render('contact',{data:data})
   },
   deletecontact:async(req,res)=>{
      const id = parseInt(req.params.ID)
      const xoa= await adminmodel.deletecontact(id);
      res.redirect('/admin/contact')
  },
  fullcontact:async(req,res)=>{
    const id = parseInt(req.params.ID)
    const data= await adminmodel.fullcontact(id);
    res.render('fullcontact',{data:data})
},
createcontact:async(req,res)=>{
   const ten=req.body.name;
   const email=req.body.email;
   const tieude=req.body.subject;
   const loinhan=req.body.message
   const add=await adminmodel.createcontact(ten,email,tieude,loinhan);
   res.redirect('/');
},
soicial:async(req,res)=>{
   const data= await adminmodel.soicial();
   res.render('soicial',{data:data})
},
deletesoicial:async(req,res)=>{
   const id = parseInt(req.params.ID)
   const xoa= await adminmodel.deletesoicial(id);
   res.redirect('/admin/soicial')
},
editsoicial:async(req,res)=>{
   const id = parseInt(req.params.ID);
   const data= await adminmodel.editsoicial(id);
   res.render('editsoicial',{data:data});
},
editinfsoicial:async(req,res)=>{
   const id = parseInt(req.params.ID);
    const ten=req.body.ten;
    const link=req.body.link
    const logo1= req.file.filename;
   const update=await adminmodel.editinfsoicial(id,ten,logo1,link);
   res.redirect('/admin/soicial')
},
createsoicial:async(req,res)=>{
   const ten=req.body.ten;
    const link=req.body.link;
    const logo1=req.file.filename;
   const add=await adminmodel.createsoicial(ten,logo1,link);
   res.redirect('/admin/soicial');
}
}