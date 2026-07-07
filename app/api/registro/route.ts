import { NextResponse } from "next/server";
import { appendRegistro } from "@/lib/google-sheets";

interface RegistroBody {
  nombre: string;
  correo: string;
  telefono: string;
  departamento: string;
  provincia: string;
  distrito: string;
  fechaNacimiento: string;
}

const REQUIRED: (keyof RegistroBody)[] = [
  "nombre",
  "correo",
  "telefono",
  "departamento",
  "provincia",
  "distrito",
  "fechaNacimiento",
];

export async function POST(req: Request) {
  let body: Partial<RegistroBody>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  for (const key of REQUIRED) {
    if (!body[key]) {
      return NextResponse.json({ error: `Falta el campo ${key}.` }, { status: 400 });
    }
  }

  try {
    await appendRegistro([
      new Date().toISOString(),
      body.nombre!,
      body.correo!,
      body.telefono!,
      body.departamento!,
      body.provincia!,
      body.distrito!,
      body.fechaNacimiento!,
    ]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error al escribir en Google Sheets:", err);
    return NextResponse.json({ error: "No se pudo guardar el registro." }, { status: 500 });
  }
}
