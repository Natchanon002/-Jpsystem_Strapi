import { NextRequest } from "next/server";
import { list } from "@vercel/blob";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "jpsystem2026";
const CONFIG_KEY = "image-overrides.json";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Read overrides from Vercel Blob
    let overrides: Record<string, string> = {};
    try {
      const { blobs } = await list({ prefix: CONFIG_KEY });
      if (blobs.length > 0) {
        const res = await fetch(blobs[0].url);
        overrides = await res.json();
      }
    } catch {
      /* no overrides yet */
    }

    return Response.json({ overrides });
  } catch (error) {
    console.error("List error:", error);
    return Response.json({ error: "Failed to list images" }, { status: 500 });
  }
}
