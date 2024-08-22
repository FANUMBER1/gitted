-- CreateTable
CREATE TABLE "profile1" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "sdt" TEXT NOT NULL,
    "congviec" TEXT NOT NULL,
    "hinhnen" TEXT NOT NULL,
    "daidien" TEXT NOT NULL,
    "thongtin1" TEXT NOT NULL,
    "thongtin2" TEXT NOT NULL,
    "gmail" TEXT NOT NULL,

    CONSTRAINT "profile1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" SERIAL NOT NULL,
    "nam" TEXT NOT NULL,
    "bangcap" TEXT NOT NULL,
    "daihoc" TEXT NOT NULL,
    "diachi" TEXT NOT NULL,
    "thongtin" TEXT NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "phantram" INTEGER NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "nam" TEXT NOT NULL,
    "vitricv" TEXT NOT NULL,
    "tencongty" TEXT NOT NULL,
    "diachi" TEXT NOT NULL,
    "mota" TEXT NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile2" (
    "id" SERIAL NOT NULL,
    "tenweb" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "profile2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "duan" (
    "tid" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "hinhanh" TEXT NOT NULL,

    CONSTRAINT "duan_pkey" PRIMARY KEY ("tid")
);

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tieude" TEXT NOT NULL,
    "loinhan" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soicial" (
    "id" SERIAL NOT NULL,
    "ten" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "soicial_pkey" PRIMARY KEY ("id")
);
