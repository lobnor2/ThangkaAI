import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10000) + 1;
  }
  const randomSeed = generateRandomNumber();

  const imageURL = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?seed=${randomSeed}&width=512&height=512&noLogo=True`;

  await fetch(imageURL);

  return NextResponse.json({ url: imageURL });
}
