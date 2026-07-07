import { google } from "googleapis";

function getAuth() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!email || !key) {
    throw new Error("Faltan GOOGLE_SHEETS_CLIENT_EMAIL / GOOGLE_SHEETS_PRIVATE_KEY en las variables de entorno.");
  }
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function quoteSheetName(sheetName: string) {
  return `'${sheetName.replace(/'/g, "''")}'`;
}

async function appendRow(sheetName: string, headers: string[], row: string[]) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    throw new Error("Falta GOOGLE_SHEETS_SPREADSHEET_ID en las variables de entorno.");
  }

  const sheets = google.sheets({ version: "v4", auth: getAuth() });
  const quotedName = quoteSheetName(sheetName);
  const range = `${quotedName}!A:Z`;

  const existing = await sheets.spreadsheets.values.get({ spreadsheetId, range: `${quotedName}!A1:A1` });
  if (!existing.data.values || existing.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [headers] },
    });
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

const REGISTRO_HEADERS = [
  "Fecha de registro",
  "Nombre",
  "Correo",
  "Teléfono",
  "Departamento",
  "Provincia",
  "Distrito",
  "Fecha de nacimiento",
];

export async function appendRegistro(row: string[]) {
  const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Registros";
  return appendRow(sheetName, REGISTRO_HEADERS, row);
}

const CAPTADOR_HEADERS = ["Fecha de registro", "Nombre", "Correo", "Mensaje"];

export async function appendCaptador(row: string[]) {
  const sheetName = process.env.GOOGLE_SHEETS_CAPTADORES_SHEET_NAME || "Captadores";
  return appendRow(sheetName, CAPTADOR_HEADERS, row);
}
