-- CreateTable
CREATE TABLE "public"."Blogs" (
    "blog_id" SERIAL NOT NULL,
    "blog_title" TEXT NOT NULL,
    "blog_body" TEXT NOT NULL,
    "blog_publisted" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("blog_id")
);
