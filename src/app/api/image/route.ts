import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  return NextResponse.json({ message: "POST", body: prompt });
}
