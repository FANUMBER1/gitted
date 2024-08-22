-- CreateTable
CREATE TABLE "taikhoan" (
    "id" SERIAL NOT NULL,
    "tentaikhoan" TEXT NOT NULL,
    "pass" TEXT NOT NULL,

    CONSTRAINT "taikhoan_pkey" PRIMARY KEY ("id")
);
