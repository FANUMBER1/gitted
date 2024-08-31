const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

module.exports={
    admin:async()=>{
        const data= await prisma.profile1.findMany()
        return data;
    },
    update:async(ten,congviec,sdt,gmail,thongtin1,thongtin2,daidien1,hinhnen1)=>{
        const update=await prisma.profile1.update({
            where:{id:1},
            data:{
                ten :`${ten}`,daidien:`${'../assets/upload/'+daidien1.filename}`,hinhnen:`${'../assets/upload/'+hinhnen1.filename}`,congviec:`${congviec}`,sdt:`${sdt}`,gmail:`${gmail}`,thongtin1:`${thongtin1}`
                ,thongtin2:`${thongtin2}`
            }
        })
    },
    education:async(req,res)=>{
        const data= await prisma.education.findMany();
        return data;
    },
    createeducation:async(bangcap,nam,daihoc,diachi,thongtin)=>{
    const add=await prisma.education.create({data:{bangcap:`${bangcap}`,nam:`${nam}`,daihoc: `${daihoc}`,diachi: `${diachi}`,thongtin: `${thongtin}`}})
    },
    deleteeducation:async(id)=>{
        const xoa= await prisma.education.deleteMany({
            where:{
                id:id
            }
        })
    },
    informationeducation:async(id)=>{
        const data= await prisma.education.findUnique({
            where:{
                id:id
            }
        });
        return data;
     },
     editeducation:async(id,bangcap,nam,daihoc,diachi,thongtin)=>{
        const update=await prisma.education.update({
            where:{
                id:id
            },
            data:{
                bangcap:`${bangcap}`,nam:`${nam}`,daihoc:`${daihoc}`,diachi:`${diachi}`,thongtin:`${thongtin}`
            }
        });
     },
     skills:async(req,res)=>{
        const data= await prisma.skills.findMany();
        return data;
    },
    deleteskills:async(id)=>{
        const xoa= await prisma.skills.deleteMany({
            where:{
               id:id
            }
        })
    },
    editskills:async(id)=>{
        const data= await prisma.skills.findUnique({
            where:{
                id:id
            }
        })
        return data
     },
     editinfskills:async(id,ten,phantram)=>{
        const update=await prisma.skills.update({
            where:{
                id
            },
            data:{
                ten :`${ten}`,phantram:phantram
            }
        }) 
     },
     createskills:async(ten,phantram)=>{
        const add=await prisma.skills.create({data:{ten:`${ten}`,phantram:phantram}})
     },
     experience:async()=>{
        const data= await prisma.experience.findMany();
        return data;
    },
    createexperience:async(vitricv,nam,tencongty,diachi,mota)=>{
        const add=await prisma.experience.create({data:{vitricv:`${vitricv}`,nam:`${nam}`,tencongty:`${tencongty}`,diachi:`${diachi}`,mota:`${mota}`}})
    },
    informationexperience:async(id)=>{
        const data= await prisma.experience.findUnique({
            where:{
                id:id
            }
        });
        return data;
    },
    deleteexperience:async(id)=>{
        const xoa= await prisma.experience.deleteMany({
            where:{
                id:id
            }
        });
    },
    editinfexperience:async(id,vitricv,nam,tencongty,diachi,mota)=>{
        const update=await prisma.experience.update({
            where:{
                id:id
            },
            data:{
                vitricv:`${vitricv}`,nam:`${nam}`,tencongty:`${tencongty}`,diachi:`${diachi}`,mota:`${mota}`
            }
        });
     },
     profile:async()=>{
        const data= await prisma.profile2.findMany();
        return data;
    },
    deleteprofile:async(id)=>{
        const xoa= await prisma.profile2.deleteMany({
            where:{
                id:id
            }
        });
    },
    editprofile:async(id)=>{
        const data= await prisma.profile2.findUnique({
            where:{
                id:id
            }
        });
        return data
     },
     editinfprofile:async(id,tenweb,link,icon)=>{
        const update=await prisma.profile2.update({
            where:{
                id:id
            },
            data:{
                tenweb :`${tenweb}`,link:`${link}`, icon:`${'../assets/upload/'+icon}`
            }
        })
    },
     createprofile:async(tenweb,link,icon)=>{
        const add=await prisma.profile2.create({data:{tenweb:`${tenweb}`,link:`${link}`,icon:`${'../assets/upload/'+icon}`}})
    },
    portfolio:async()=>{
       const data= await prisma.duan.findMany();
       return data;
   },
   deleteportfolio:async(id)=>{
       const xoa= await prisma.duan.deleteMany({
        where:{
            tid:id
        }
       })
   },
   editportfolio:async(id)=>{
       const data= await prisma.duan.findUnique({
        where:{
            tid:id
        }
       });
       return data
    },
    editinfportfolio:async(id,ten,logo)=>{
        const update=await prisma.duan.update({
            where:{
                tid:id
            },
            data:{
                ten :`${ten}`,hinhanh:`${'../assets/upload/'+logo}`
            }
        })
    },
    createportfolio:async(ten,logo)=>{
        const add=await prisma.duan.create({data:{ten:`${ten}`,hinhanh:`${'../assets/upload/'+logo}`}})
    },
    client:async()=>{
       const data= await prisma.client.findMany();
       return data;
   },
   deleteclient:async(id)=>{
       const xoa= await prisma.client.deleteMany({
        where:{
            id:id
        }
       });
   },
   editclient:async(id)=>{
       const data= await prisma.client.findUnique({
        where:{
            id:id
        }
       })
       return data
    },
    editinfclient:async(id,ten,logo)=>{
        const update=await prisma.client.update({
            where:{
                id:id
            },
            data:{
                ten :`${ten}`,logo:`${'../assets/upload/'+logo}`
            }
        })
    },
    createclient:async(ten,logo)=>{
        const add=await prisma.client.create({data:{ten:`${ten}`,logo:`${'../assets/upload/'+logo}`}})
    },
    contact:async(req,res)=>{
        const data= await prisma.contact.findMany();
        return data;
     },
     deletecontact:async(id)=>{
        const xoa= await prisma.contact.deleteMany({
            where:{
                id:id
            }
        })
    },
    fullcontact:async(id)=>{
         const data= await prisma.contact.findUnique({
            where:{
                id:id
            }
         });
         return data;
     },
     createcontact:async(ten,email,tieude,loinhan)=>{
        const add=await prisma.contact.create({data:{ten:`${ten}`,email:`${email}`,tieude:`${tieude}`,loinhan:`${loinhan}`}})
     },
     soicial:async()=>{
        const data= await prisma.soicial.findMany();
        return data;
    },
    deletesoicial:async(id)=>{
        const xoa= await prisma.soicial.deleteMany({
            where:{id:id}
        });
    },
    editsoicial:async(id)=>{
        const data= await prisma.soicial.findUnique({
            where:{
                id:id
            }
        });
        return data
     },
     editinfsoicial:async(id,ten,logo1,link)=>{
        const update=await prisma.soicial.update({
            where:{
                id:id
            },
            data:{
                ten :`${ten}`,link:`${link}`, logo:`${'../assets/upload/'+logo1}`               
            }
        })
    },
     createsoicial:async(ten,logo1,link)=>{
        const add=await prisma.soicial.create({data:{ten:`${ten}`,link:`${link}`,logo:`${'../assets/upload/'+logo1}`}})
    }
}