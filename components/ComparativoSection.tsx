const rows = [
  { label: "Rentabilidad anual",    banco: "3% – 5%",            afp: "5% – 7%",          inmueble: "6% – 9%",         platita: "16% anual"            },
  { label: "Inversión mínima",      banco: "S/ 1,000+",          afp: "Descuento mensual", inmueble: "S/ 200,000+",     platita: "S/ 10,000"            },
  { label: "Respaldo del capital",  banco: "Fondo de seguro",    afp: "Fondo colectivo",  inmueble: "Propiedad",       platita: "Activo inmobiliario"  },
  { label: "Proceso",               banco: "Colas presenciales", afp: "Colas presenciales", inmueble: "Notaría + bancos", platita: "100% online · 5 min" },
  { label: "Gestión del activo",    banco: "N/A",                afp: "Administradora",   inmueble: "Tú mismo",        platita: "Nosotros lo hacemos"  },
  { label: "Comisiones de entrada", banco: "Varía",              afp: "% del aporte",     inmueble: "3% – 5% + notaría", platita: "S/ 0"               },
];

const cols = [
  { key: "banco",    label: "Banco",            highlight: false },
  { key: "afp",      label: "AFP",              highlight: false },
  { key: "inmueble", label: "Inmueble directo", highlight: false },
  { key: "platita",  label: "Platita.pe",       highlight: true  },
];

export default function ComparativoSection() {
  return (
    <section className="py-20 px-4" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md inline-block"
            style={{ background: "rgba(12,18,55,0.06)", border: "1px solid rgba(12,18,55,0.12)", color: "#1c0f4c" }}
          >
            ¿Por qué Platita.pe?
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3" style={{ color: "#1c0f4c" }}>
            Compara y decide{" "}
            <span className="gradient-text">con datos</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(8,11,30,0.50)" }}>
            Tu platita merece trabajar más duro. Mira cómo se compara Platita.pe con las alternativas tradicionales.
          </p>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, minWidth: "640px" }}>
            <thead>
              <tr>
                <th style={{ width: "180px", padding: "12px 16px" }} />
                {cols.map((col) => (
                  <th
                    key={col.key}
                    style={{
                      padding: "14px 12px",
                      textAlign: "center",
                      fontWeight: 800,
                      fontSize: "0.8rem",
                      letterSpacing: "0.03em",
                      borderRadius: col.highlight ? "14px 14px 0 0" : "0",
                      background: col.highlight
                        ? "linear-gradient(135deg, rgba(188,69,233,0.10), rgba(108,220,255,0.07))"
                        : "rgba(28,15,76,0.03)",
                      border: col.highlight
                        ? "1px solid rgba(188,69,233,0.25)"
                        : "1px solid rgba(28,15,76,0.08)",
                      borderBottom: "none",
                      color: col.highlight ? "#bc45e9" : "rgba(15,10,46,0.40)",
                    }}
                  >
                    {col.highlight && (
                      <div
                        style={{
                          fontSize: "0.55rem",
                          fontWeight: 800,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#bc45e9",
                          background: "rgba(188,69,233,0.10)",
                          border: "1px solid rgba(188,69,233,0.25)",
                          borderRadius: "20px",
                          padding: "2px 8px",
                          display: "inline-block",
                          marginBottom: "6px",
                        }}
                      >
                        Recomendado
                      </div>
                    )}
                    <div>{col.label}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const isLast = ri === rows.length - 1;
                return (
                  <tr key={ri}>
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(15,10,46,0.50)",
                        borderTop: "1px solid rgba(28,15,76,0.06)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.label}
                    </td>
                    {cols.map((col) => {
                      const val = row[col.key as keyof typeof row] as string;
                      return (
                        <td
                          key={col.key}
                          style={{
                            padding: "14px 12px",
                            textAlign: "center",
                            fontSize: col.highlight ? "0.88rem" : "0.8rem",
                            fontWeight: col.highlight ? 700 : 500,
                            color: col.highlight ? "#1c0f4c" : "rgba(15,10,46,0.38)",
                            background: col.highlight
                              ? "rgba(188,69,233,0.04)"
                              : "rgba(28,15,76,0.015)",
                            borderLeft: col.highlight
                              ? "1px solid rgba(188,69,233,0.20)"
                              : "1px solid rgba(28,15,76,0.05)",
                            borderRight: col.highlight
                              ? "1px solid rgba(188,69,233,0.20)"
                              : "1px solid rgba(28,15,76,0.05)",
                            borderTop: "1px solid rgba(28,15,76,0.06)",
                            borderBottom: isLast && col.highlight
                              ? "1px solid rgba(188,69,233,0.20)"
                              : "none",
                            borderRadius: isLast && col.highlight ? "0 0 14px 14px" : "0",
                          }}
                        >
                          {col.highlight ? (
                            <span style={{ color: "#bc45e9", fontWeight: 800 }}>{val}</span>
                          ) : val}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "rgba(15,10,46,0.30)" }}>
          *Rentabilidades estimadas basadas en datos históricos del mercado peruano. No garantizan resultados futuros.
        </p>
      </div>
    </section>
  );
}
