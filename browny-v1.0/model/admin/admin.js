const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

module.exports={
    admin:async()=>{
        const data= await prisma.$queryRaw`select * from "profile1"`;
        return data;
    },
    update:async(ten, congviec,sdt,gmail,thongtin1,thongtin2,daidien1,hinhnen1)=>{
        const update=await prisma.$queryRaw`UPDATE "profile1" SET ten =${ten},daidien=${'../assets/upload/'+daidien1.filename},hinhnen=${'../assets/upload/'+hinhnen1.filename},congviec=${congviec},sdt=${sdt},gmail=${gmail},thongtin1=${thongtin1}
                 ,thongtin2=${thongtin2} WHERE id=${1}`
    },
    education:async(req,res)=>{
        const data= await prisma.$queryRaw`select * from "education"`;
        return data;
    },
    createeducation:async(bangcap,nam,daihoc,diachi,thongtin)=>{
    const add=await prisma.education.create({data:{bangcap:`${bangcap}`,nam:`${nam}`,daihoc: `${daihoc}`,diachi: `${diachi}`,thongtin: `${thongtin}`}})
    },
    deleteeducation:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "education" where id = ${id}`
    },
    informationeducation:async(id)=>{
        const data= await prisma.$queryRaw`select * from "education" where id=${id}`;
        return data;
     },
     editeducation:async(id,bangcap,nam,daihoc,diachi,thongtin)=>{
        const update=await prisma.$queryRaw`UPDATE "education" SET bangcap =${bangcap},nam=${nam},daihoc=${daihoc},diachi=${diachi},thongtin=${thongtin}
        WHERE id=${id}` 
     },
     skills:async(req,res)=>{
        const data= await prisma.$queryRaw`select * from "skills"`;
        return data;
    },
    deleteskills:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "skills" where id = ${id}`
    },
    editskills:async(id)=>{
        const data= await prisma.$queryRaw`select * from "skills" where id=${id}`;
        return data
     },
     editinfskills:async(id,ten,phantram)=>{
        const update=await prisma.$queryRaw`UPDATE "skills" SET ten =${ten},phantram=${phantram} WHERE id=${id}` 
     },
     createskills:async(ten,phantram)=>{
        const add=await prisma.skills.create({data:{ten:`${ten}`,phantram:phantram}})
     },
     experience:async()=>{
        const data= await prisma.$queryRaw`select * from "experience"`;
        return data;
    },
    createexperience:async(vitricv,nam,tencongty,diachi,mota)=>{
        const add=await prisma.experience.create({data:{vitricv:`${vitricv}`,nam:`${nam}`,tencongty:`${tencongty}`,diachi:`${diachi}`,mota:`${mota}`}})
    },
    informationexperience:async(id)=>{
        const data= await prisma.$queryRaw`select * from "experience" where id=${id}`;
        return data;
    },
    deleteexperience:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "experience" where id = ${id}`;
    },
    editinfexperience:async(id,vitricv,nam,tencongty,diachi,mota)=>{
        const update=await prisma.$queryRaw`UPDATE "experience" SET vitricv=${vitricv},nam=${nam},tencongty=${tencongty},diachi=${diachi},mota=${mota} WHERE id=${id}` 
     },
     profile:async()=>{
        const data= await prisma.$queryRaw`select * from "profile2"`;
        return data;
    },
    deleteprofile:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "profile2" where id = ${id}`
    },
    editprofile:async(id)=>{
        const data= await prisma.$queryRaw`select * from "profile2" where id=${id}`;
        return data
     },
     editinfprofile:async(id,tenweb,link,icon)=>{
        const update=await prisma.$queryRaw`UPDATE "profile2" SET tenweb =${tenweb},link=${link}, icon=${'../assets/upload/'+icon} WHERE id=${id}` 
    },
     createprofile:async(tenweb,link,icon)=>{
        const add=await prisma.profile2.create({data:{tenweb:`${tenweb}`,link:`${link}`,icon:`${'../assets/upload/'+icon}`}})
    },
    portfolio:async()=>{
       const data= await prisma.$queryRaw`select * from "duan"`;
       return data;
   },
   deleteportfolio:async(id)=>{
       const xoa= await prisma.$queryRaw`delete from "duan" where tid = ${id}`
   },
   editportfolio:async(id)=>{
       const data= await prisma.$queryRaw`select * from "duan" where tid=${id}`;
       return data
    },
    editinfportfolio:async(id,ten,logo)=>{
        const update=await prisma.$queryRaw`UPDATE "duan" SET ten =${ten},hinhanh=${'../assets/upload/'+logo} WHERE tid=${id}` 
    },
    createportfolio:async(ten,logo)=>{
        const add=await prisma.duan.create({data:{ten:`${ten}`,hinhanh:`${'../assets/upload/'+logo}`}})
    },
    client:async()=>{
       const data= await prisma.$queryRaw`select * from "client"`;
       return data;
   },
   deleteclient:async(id)=>{
       const xoa= await prisma.$queryRaw`delete from "client" where id = ${id}`
   },
   editclient:async(id)=>{
       const data= await prisma.$queryRaw`select * from "client" where id=${id}`;
       return data
    },
    editinfclient:async(id,ten,logo)=>{
        const update=await prisma.$queryRaw`UPDATE "client" SET ten =${ten},logo=${'../assets/upload/'+logo} WHERE id=${id}` 
    },
    createclient:async(ten,logo)=>{
        const add=await prisma.client.create({data:{ten:`${ten}`,logo:`${'../assets/upload/'+logo}`}})
    },
    contact:async(req,res)=>{
        const data= await prisma.$queryRaw`select * from "contact"`;
        return data;
     },
     deletecontact:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "contact" where id = ${id}`
    },
    fullcontact:async(id)=>{
         const data= await prisma.$queryRaw`select * from "contact" where id = ${id}`;
         return data;
     },
     createcontact:async(ten,email,tieude,loinhan)=>{
        const add=await prisma.contact.create({data:{ten:`${ten}`,email:`${email}`,tieude:`${tieude}`,loinhan:`${loinhan}`}})
     },
     soicial:async()=>{
        const data= await prisma.$queryRaw`select * from "soicial"`;
        return data;
    },
    deletesoicial:async(id)=>{
        const xoa= await prisma.$queryRaw`delete from "soicial" where id = ${id}`
    },
    editsoicial:async(id)=>{
        const data= await prisma.$queryRaw`select * from "soicial" where id=${id}`;
        return data
     },
     editinfsoicial:async(id,ten,logo1,link)=>{
        const update=await prisma.$queryRaw`UPDATE "soicial" SET ten =${ten},link=${link}, logo=${'../assets/upload/'+logo1} WHERE id=${id}` 
    },
     createsoicial:async(ten,logo1,link)=>{
        const add=await prisma.soicial.create({data:{ten:`${ten}`,link:`${link}`,logo:`${'../assets/upload/'+logo1}`}})
    }
}