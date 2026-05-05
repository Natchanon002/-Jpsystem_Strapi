import { NextRequest } from "next/server";
import { put, list } from "@vercel/blob";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "jpsystem2026";
const CONFIG_KEY = "image-overrides.json";

/** Read the overrides config from Vercel Blob */
async function readOverrides(): Promise<Record<string, string>> {
  try {
    const { blobs } = await list({ prefix: CONFIG_KEY });
    if (blobs.length === 0) return {};
    const res = await fetch(blobs[0].url);
    return await res.json();
  } catch {
    return {};
  }
}

/** Write the overrides config to Vercel Blob */
async function writeOverrides(overrides: Record<string, string>) {
  await put(CONFIG_KEY, JSON.stringify(overrides), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const password = formData.get("password") as string;

    if (password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const file = formData.get("file") as File | null;
    const targetName = formData.get("targetName") as string;

    if (!file || !targetName) {
      return Response.json({ error: "Missing file or targetName" }, { status: 400 });
    }

    // Upload to Vercel Blob
    const blob = await put(`images/${targetName}`, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type,
    });

    // Update overrides config
    const overrides = await readOverrides();
    overrides[targetName] = blob.url;
    await writeOverrides(overrides);

    return Response.json({
      success: true,
      fileName: targetName,
      url: blob.url,
      size: file.size,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ error: "Upload failed" }, { status: 500 });
  }
}
