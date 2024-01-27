import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const check = await fetch(new URL("/", req.url))
  return new Response(check.body)
}
