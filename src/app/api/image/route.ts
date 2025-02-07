import { authOptions } from "@/utils/authOptions";
import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

//POST Request
export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized, Please Login",
      },
      {
        status: 401,
      }
    );
  }
  const { prompt } = await request.json();

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }
  const randomSeed = generateRandomNumber();

  const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?seed=${randomSeed}&width=512&height=512&nologo=True`;

  const response = await fetch(imageURL);
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: response.status }
    );
  }

  await prisma.post.create({
    data: {
      prompt: prompt,
      url: imageURL,
      seed: randomSeed,
      //   userId: session.user.id,
      User: { connect: { id: session.user.id } },
    },
  });

  return NextResponse.json({ url: imageURL });
}

//GET Request
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized, Please Login",
      },
      {
        status: 401,
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (!user) {
    return NextResponse.json({ error: "No user found" }, { status: 401 });
  }

  const posts = await prisma.post.findMany({
    where: { userId: session.user.id },
  });

  return NextResponse.json(posts);
}
