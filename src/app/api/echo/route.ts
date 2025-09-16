import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { msg } = await req.json();
  return Response.json({ msg: `echo: ${msg}` });
}
