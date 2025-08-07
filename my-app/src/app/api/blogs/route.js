//BASE URL

const { PrismaClient } = require("@prisma/client");
const { NextResponse } = require("next/server");

const prisma = new PrismaClient();
const BASE_URL = "http://localhost:3000/api/v1/";

//1.GET - BLOG LIST
export const GET = async () => {
  try {
    prisma.$connect();
    const response = await prisma.blogs.findMany();
    return NextResponse.json(
      {
        message: "blog list",
        blogs: response,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Something went wrong!!!ss",
      },
      {
        status: 500,
      }
    );
  } finally {
    prisma.$disconnect();
  }
};

// POST - CREATE BLOG
export const POST = async (req) => {
  const body = await req.json();
  const {
    blog_id,
    blog_title,
    blog_body,
    blog_publisted,
    createdAt,
    updatedAt,
  } = body;
  try {
    prisma.$connect();
    const newBlog = await prisma.blogs.create({
      data: {
        blog_id,
        blog_title,
        blog_body,
        blog_publisted,
        createdAt,
        updatedAt,
      },
    });

    return NextResponse.json(
      {
        message: "New blog has been created successfully",
        blogs: newBlog,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message || "Something went wrong!!!",
      },
      {
        status: 500,
      }
    );
  } finally {
    await prisma.$disconnect;
  }
};
