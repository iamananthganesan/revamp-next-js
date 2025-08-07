//1.GET - BLOG BY ID

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, { params }) => {
  //RECEIVING PARAMS FROM REQUEST BODY
  const { blog_id } = await params;

  const id = parseInt(blog_id);
  try {
    await prisma.$connect();
    const data = await prisma.blogs.findUnique({
      where: {
        blog_id: id,
      },
    });
    return NextResponse.json(
      {
        message: "Blog details",
        blog: data,
      },
      { status: 200 }
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
    prisma.$disconnect;
  }
};

export const PUT = async (req, { params }) => {
  //RECEIVING PARAMS FROM REQUEST BODY
  const { blog_id } = await params;
  const body = await req.json();
  const { blog_title, blog_author, blog_body, createdAt, updatedAt } = body;
  const id = parseInt(blog_id);
  try {
    await prisma.$connect();
    const data = await prisma.blogs.findUnique({
      where: {
        blog_id: id,
      },
      data: {
        blog_title,
        blog_author,
        blog_body,
        createdAt,
        updatedAt,
      },
    });
    return NextResponse.json(
      {
        message: "Blog details has been updated",
        blog: data,
      },
      { status: 200 }
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
    prisma.$disconnect;
  }
};
