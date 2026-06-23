import { WA_CONTACT_URL } from "@/lib/config";

const pillars = [
  {
    number: "01",
    title: "Inscripción en SUNARP",
    description: "Cada proyecto queda inscrito en los Registros Públicos. Tu participación está respaldada por un activo real y verificable.",
    badge: "Registro Público",
    accent: "#bc45e9",
    accentRgb: "188,69,233",
  },
  {
    number: "02",
    title: "Contrato notarial",
    description: "Cada inversión se formaliza con un contrato firmado ante notario. Tus derechos están documentados y son legalmente exigibles.",
    badge: "Firma Notarial",
    accent: "#6cdcff",
    accentRgb: "108,220,255",
  },
  {
    number: "03",
    title: "Fondos separados",
    description: "Tu capital se mantiene en cuentas independientes, separadas del capital operativo de Platita.pe. Nunca mezclamos fondos.",
    badge: "Segregación Total",
    accent: "#bc45e9",
    accentRgb: "188,69,233",
  },
  {
    number: "04",
    title: "Marco regulatorio SBS y SMV",
    description: "Diseñado desde el primer día para cumplir con los estándares regulatorios de la SBS y la SMV. Transparencia total en cada operación.",
    badge: "Supervisión Estatal",
    accent: "#6cdcff",
    accentRgb: "108,220,255",
  },
];

export default function SecuritySection() {
  return (
    <section id="seguridad" className="py-24 px-4" style={{ background: "#ffffff" }}>
      <div className="max-w-5xl mx-auto">

        {/* Two-column header */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
          <div className="lg:w-[40%] flex flex-col justify-center gap-4">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-md w-fit"
              style={{ background: "rgba(188,69,233,0.08)", border: "1px solid rgba(188,69,233,0.22)", color: "#bc45e9" }}
            >
              Tu protección
            </span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: "#1c0f4c" }}>
              Tu inversión está{" "}
              <span className="gradient-text">protegida</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(15,10,46,0.52)" }}>
              Estructura legal y regulatoria de primer nivel. No solo tecnología — cada sol invertido tiene respaldo real y verificable.
            </p>
          </div>

          {/* Legal compliance checklist */}
          <div className="lg:w-[60%] flex flex-col divide-y" style={{ borderTop: "1px solid rgba(15,10,46,0.09)", borderBottom: "1px solid rgba(15,10,46,0.09)" }}>
            {pillars.map((p) => (
              <div key={p.number} className="flex items-start gap-5 py-5">
                <span
                  className="text-xs font-black tracking-widest shrink-0 mt-0.5"
                  style={{ color: p.accent, opacity: 0.7 }}
                >
                  {p.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-bold text-base" style={{ color: "#1c0f4c" }}>{p.title}</span>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{
                        background: `rgba(${p.accentRgb},0.09)`,
                        color: p.accent,
                        border: `1px solid rgba(${p.accentRgb},0.22)`,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(15,10,46,0.52)" }}>
                    {p.description}
                  </p>
                </div>
                {/* Checkmark */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10"
          style={{
            background: "linear-gradient(135deg, rgba(188,69,233,0.06) 0%, rgba(108,220,255,0.06) 100%)",
            border: "1px solid rgba(188,69,233,0.16)",
          }}
        >
          <div className="flex-1 text-center md:text-left">
            <p className="font-black text-xl mb-1" style={{ color: "#1c0f4c" }}>
              ¿Aún tienes dudas sobre la seguridad?
            </p>
            <p className="text-sm" style={{ color: "rgba(15,10,46,0.52)" }}>
              Habla directamente con nuestro equipo legal y resuelve tus preguntas antes de invertir.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={WA_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#25D366",
                color: "white",
                boxShadow: "0 4px 16px rgba(37,211,102,0.30)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.815 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>
            <a
              href="#registro"
              className="btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold"
            >
              Quiero invertir →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
