import { NextResponse } from "next/server";
import { appendCaptador } from "@/lib/google-sheets";

interface CaptadorBody {
  nombre: string;
  correo: string;
  mensaje?: string;
}

export async function POST(req: Request) {
  let body: Partial<CaptadorBody>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  if (!body.nombre || !body.correo) {
    return NextResponse.json({ error: "Falta nombre o correo." }, { status: 400 });
  }

  try {
    await appendCaptador([
      new Date().toISOString(),
      body.nombre,
      body.correo,
      body.mensaje ?? "",
    ]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error al escribir en Google Sheets:", err);
    return NextResponse.json({ error: "No se pudo guardar el registro." }, { status: 500 });
  }
}
