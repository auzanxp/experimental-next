import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const post = await prisma.post.findMany({});
  return NextResponse.json({ post });
};

export const POST = async (req: NextRequest) => {
  const { title, content } = req.json();
  const post = await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  return NextResponse.json({ post });
};
