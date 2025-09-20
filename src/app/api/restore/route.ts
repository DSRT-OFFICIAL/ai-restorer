import { NextResponse } from "next/server";
import { replicateClient } from "@/lib/replicate";

export async function POST(req: Request) {
  try {
    const { imageUrl } = await req.json();

    const output = await replicateClient.run(
      "sczhou/codeformer:latest",
      { input: { image: imageUrl } }
    );

    return NextResponse.json({ result: output });
  } catch (err) {
    console.error("Restore error:", err);
    return NextResponse.json({ error: "Gagal merestorasi" }, { status: 500 });
  }
}
