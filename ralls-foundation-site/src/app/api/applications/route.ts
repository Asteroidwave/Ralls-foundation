import { NextResponse } from "next/server";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const id = `app_${Date.now().toString(36)}`;
    const record = { id, submittedAt: new Date().toISOString(), ...data };

    const file = path.join(process.cwd(), "submissions.json");
    let existing: unknown[] = [];
    try {
      const raw = await readFile(file, "utf-8");
      existing = JSON.parse(raw);
      if (!Array.isArray(existing)) existing = [];
    } catch {}
    existing.push(record);
    await writeFile(file, JSON.stringify(existing, null, 2), "utf-8");

    return NextResponse.json({ ok: true, id });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Invalid request" }, { status: 400 });
  }
}


