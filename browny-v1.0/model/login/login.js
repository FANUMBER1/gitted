const { PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

module.exports={
    taikhoan: async () => {
        const data= await prisma.$queryRaw`select * from "taikhoan"`;
       return data;
    },
    createadmin:async(taikhoan,pass)=>{
        const creat= await prisma.taikhoan.create({data:{tentaikhoan:`${taikhoan}`,pass:`${pass}`}});
      }
}