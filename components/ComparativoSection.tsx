const rows = [
  {
    label: "Rentabilidad anual",
    platita: "10% – 22%",
    banco: "3% – 5%",
    afp: "5% – 7%",
    dolares: "~0%",
    inmueble: "6% – 10%",
    platitaHighlight: true,
  },
  {
    label: "Inversión mínima",
    platita: "S/ 500",
    banco: "S/ 1,000+",
    afp: "Descuento mensual",
    dolares: "Cualquiera",
    inmueble: "S/ 200,000+",
    platitaHighlight: true,
  },
  {
    label: "Respaldo del capital",
    platita: "Activo inmobiliario",
    banco: "Fondo de seguro",
    afp: "Fondo colectivo",
    dolares: "Ninguno",
    inmueble: "Propiedad directa",
    platitaHighlight: true,
  },
  {
    label: "Proceso",
    platita: "100% online · 5 min",
    banco: "Presencial / app",
    afp: "Automático",
    dolares: "Casa de cambio",
    inmueble: "Notaría + bancos",
    platitaHighlight: true,
  },
  {
    label: "Gestión del activo",
    platita: "Nosotros lo hacemos",
    banco: "N/A",
    afp: "Administradora",
    dolares: "Tú mismo",
    inmueble: "Tú mismo",
    platitaHighlight: true,
  },
  {
    label: "Comisiones de entrada",
    platita: "S/ 0",
    banco: "Varía",
    afp: "% del aporte",
    dolares: "% de cambio",
    inmueble: "3% – 5% + notaría",
    platitaHighlight: true,
  },
];

const cols = [
  { key: "platita",  label: "Platita.pe",      highlight: true  },
  { key: "banco",    label: "Banco",            highlight: false },
  { key: "afp",      label: "AFP",              highlight: false },
  { key: "dolares",  label: "Dólares",          highlight: false },
  { key: "inmueble", label: "Inmueble directo", highlight: false },
];

export default function ComparativoSection() {
  return (
    <section className="py-24 px-4" style={{ background: "#08061a" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
              color: "#22d3ee",
            }}
          >
            ¿Por qué Platita.pe?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            Compara y decide{" "}
            <span className="gradient-text">con datos</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Tu platita merece trabajar más duro. Mira cómo se compara Platita.pe con las alternativas tradicionales.
          </p>
        </div>

        {/* Table wrapper — scroll horizontal en móvil */}
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, minWidth: "640px" }}>
            <thead>
              <tr>
                {/* Empty corner */}
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
                        ? "linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.15))"
                        : "rgba(255,255,255,0.03)",
                      border: col.highlight
                        ? "1px solid rgba(34,211,238,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                      borderBottom: "none",
                      color: col.highlight ? "#22d3ee" : "rgba(255,255,255,0.45)",
                    }}
                  >
                    {col.highlight && (
                      <div
                        style={{
                          fontSize: "0.55rem",
                          fontWeight: 800,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "#22d3ee",
                          background: "rgba(34,211,238,0.15)",
                          border: "1px solid rgba(34,211,238,0.3)",
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
                    {/* Row label */}
                    <td
                      style={{
                        padding: "14px 16px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.5)",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
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
                            color: col.highlight ? "white" : "rgba(255,255,255,0.38)",
                            background: col.highlight
                              ? "rgba(34,211,238,0.05)"
                              : "rgba(255,255,255,0.015)",
                            borderLeft: col.highlight
                              ? "1px solid rgba(34,211,238,0.25)"
                              : "1px solid rgba(255,255,255,0.04)",
                            borderRight: col.highlight
                              ? "1px solid rgba(34,211,238,0.25)"
                              : "1px solid rgba(255,255,255,0.04)",
                            borderTop: "1px solid rgba(255,255,255,0.05)",
                            borderBottom: isLast && col.highlight
                              ? "1px solid rgba(34,211,238,0.25)"
                              : "none",
                            borderRadius: isLast && col.highlight ? "0 0 14px 14px" : "0",
                          }}
                        >
                          {col.highlight ? (
                            <span style={{ color: "#22d3ee" }}>{val}</span>
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

        <p className="text-center text-xs mt-6" style={{ color: "rgba(255,255,255,0.2)" }}>
          *Rentabilidades estimadas basadas en datos históricos del mercado peruano. No garantizan resultados futuros.
        </p>
      </div>
    </section>
  );
}
