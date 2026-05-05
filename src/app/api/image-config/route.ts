import { list } from "@vercel/blob";

const CONFIG_KEY = "image-overrides.json";

export const dynamic = "force-dynamic";

/** Public endpoint — returns image override map (no auth needed) */
export async function GET() {
  try {
    const { blobs } = await list({ prefix: CONFIG_KEY });
    if (blobs.length === 0) {
      return Response.json({ overrides: {} });
    }
    const res = await fetch(blobs[0].url);
    const overrides = await res.json();
    return Response.json({ overrides });
  } catch {
    return Response.json({ overrides: {} });
  }
}
