"use client";
/** App Preview — phone mockup centrado, dominante, con toasts flotantes descriptivos */

const portfolio = [
  { name: "Torre Miraflores 360", roi: "+20%", amount: "S/1,000", progress: 78, color: "#22d3ee" },
  { name: "Viva San Isidro",      roi: "+18%", amount: "S/2,000", progress: 92, color: "#a78bfa" },
];

function PhoneMockup() {
  return (
    <div
      style={{
        width: "230px",
        borderRadius: "34px",
        background: "#0a0818",
        border: "1.5px solid rgba(255,255,255,0.10)",
        boxShadow:
          "0 48px 96px rgba(28,15,76,0.35), 0 0 0 1px rgba(255,255,255,0.03), inset 0 0 0 1px rgba(255,255,255,0.05)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 0" }}>
        <div style={{ width: "72px", height: "20px", background: "#000", borderRadius: "10px" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px 18px", fontSize: "0.55rem", color: "rgba(255,255,255,0.35)" }}>
        <span>9:41</span><span>●●●  100%</span>
      </div>

      {/* Content */}
      <div style={{ padding: "6px 14px 18px" }}>
        <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.6rem", margin: "0 0 2px" }}>Hola, Inversor 👋</p>
        <p style={{ color: "white", fontWeight: 800, fontSize: "0.85rem", margin: "0 0 12px" }}>Mi portafolio</p>

        {/* Total card */}
        <div style={{ borderRadius: "14px", padding: "12px", background: "linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.14))", border: "1px solid rgba(34,211,238,0.22)", marginBottom: "10px" }}>
          <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.55rem", margin: "0 0 3px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Total invertido</p>
          <p style={{ color: "white", fontWeight: 900, fontSize: "1.3rem", margin: "0 0 5px", lineHeight: 1 }}>S/ 3,000</p>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.65rem", fontWeight: 700 }}>↑ +S/ 330</span>
            <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.55rem" }}>ganancia acumulada</span>
          </div>
          <svg viewBox="0 0 140 26" style={{ width: "100%", marginTop: "7px" }}>
            <polyline points="0,24 18,20 36,18 54,14 72,11 90,8 108,5 126,3 140,1" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
            <polyline points="0,24 18,20 36,18 54,14 72,11 90,8 108,5 126,3 140,1 140,26 0,26" fill="url(#sg2)" opacity="0.13" />
            <defs>
              <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", margin: "0 0 7px" }}>Mis proyectos</p>
        {portfolio.map((p, i) => (
          <div key={i} style={{ borderRadius: "10px", padding: "9px 10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ color: "white", fontSize: "0.6rem", fontWeight: 700 }}>{p.name}</span>
              <span style={{ color: p.color, fontSize: "0.6rem", fontWeight: 800 }}>{p.roi}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
              <span style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.55rem" }}>{p.amount} invertidos</span>
              <span style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.55rem" }}>{p.progress}%</span>
            </div>
            <div style={{ height: "2.5px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p.progress}%`, background: p.color, borderRadius: "99px" }} />
            </div>
          </div>
        ))}

        <div style={{ marginTop: "10px", padding: "9px", borderRadius: "10px", background: "linear-gradient(135deg,#22d3ee,#8b5cf6)", textAlign: "center", fontSize: "0.65rem", fontWeight: 800, color: "white" }}>
          + Explorar proyectos
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "7px" }}>
        <div style={{ width: "90px", height: "3.5px", background: "rgba(255,255,255,0.18)", borderRadius: "99px" }} />
      </div>
    </div>
  );
}

/* Floating toast card */
interface ToastProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent: string;
  floatClass: string;
  style?: React.CSSProperties;
}

function Toast({ icon, title, desc, accent, floatClass, style }: ToastProps) {
  return (
    <div
      className={`${floatClass} absolute hidden md:flex items-start gap-3 pointer-events-none`}
      style={{
        background: "#ffffff",
        border: "1px solid #d2dcea",
        boxShadow: "0 4px 20px rgba(8,10,30,0.09)",
        borderRadius: "12px",
        padding: "12px 14px",
        maxWidth: "210px",
        zIndex: 10,
        ...style,
      }}
    >
      {/* accent bar */}
      <div style={{ width: "3px", alignSelf: "stretch", borderRadius: "99px", background: accent, flexShrink: 0 }} />
      <div style={{ minWidth: 0 }}>
        <div className="flex items-center gap-2 mb-1">
          <div
            style={{
              width: "28px", height: "28px", borderRadius: "8px",
              background: `${accent}14`, border: `1px solid ${accent}30`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <p style={{ color: "#080b1e", fontWeight: 700, fontSize: "0.72rem", lineHeight: 1.2 }}>{title}</p>
        </div>
        <p style={{ color: "rgba(8,11,30,0.48)", fontSize: "0.63rem", lineHeight: 1.4, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

export default function AppPreviewSection() {
  return (
    <section className="py-20 px-4 overflow-hidden" style={{ background: "#eef2f9" }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md inline-block"
            style={{ background: "rgba(12,18,55,0.06)", border: "1px solid rgba(12,18,55,0.12)", color: "#1c0f4c" }}
          >
            La plataforma
          </span>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full inline-block ml-2"
            style={{ background: "rgba(108,220,255,0.10)", border: "1px solid rgba(108,220,255,0.25)", color: "rgba(15,10,46,0.45)" }}
          >
            Vista previa — app en desarrollo
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3" style={{ color: "#080b1e" }}>
            Todo en la palma{" "}
            <span className="gradient-text">de tu mano</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(8,11,30,0.50)" }}>
            Una plataforma diseñada para que invertir en bienes raíces sea tan fácil como operar en línea
          </p>
        </div>

        {/* ── Centered phone + floating toasts ── */}
        <div className="relative flex justify-center" style={{ minHeight: "560px", alignItems: "center" }}>

          {/* Glow detrás del teléfono */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(188,69,233,0.18) 0%, rgba(108,180,255,0.12) 50%, transparent 75%)",
              filter: "blur(32px)",
            }}
          />

          {/* Toast 1 — Dashboard (top-left) */}
          <Toast
            floatClass="float-a"
            style={{ top: "2%", left: "0%" }}
            accent="#6cdcff"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0097b2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            }
            title="Dashboard en tiempo real"
            desc="Rendimiento, ganancias y proyecciones actualizadas al instante"
          />

          {/* Toast 2 — Alertas (top-right) */}
          <Toast
            floatClass="float-b"
            style={{ top: "8%", right: "0%" }}
            accent="#bc45e9"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bc45e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            }
            title="Alertas inteligentes"
            desc="Notificaciones de hitos, nuevas oportunidades y cobros de retorno"
          />

          {/* Toast 3 — Documentos (bottom-left) */}
          <Toast
            floatClass="float-c"
            style={{ bottom: "10%", left: "0%" }}
            accent="#6cdcff"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0097b2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            }
            title="Documentación digital"
            desc="Contratos, estados financieros y reportes de cada proyecto"
          />

          {/* Toast 4 — Seguridad (bottom-right) */}
          <Toast
            floatClass="float-a"
            style={{ bottom: "4%", right: "0%", animationDelay: "1.4s" }}
            accent="#bc45e9"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#bc45e9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            }
            title="Seguridad bancaria"
            desc="Cifrado de extremo a extremo, 2FA y autenticación biométrica"
          />

          {/* Toast 5 — Contratos (mid-left) — solo en pantallas grandes */}
          <Toast
            floatClass="float-b"
            style={{ top: "44%", left: "1%", animationDelay: "0.7s" }}
            accent="#1c0f4c"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
              </svg>
            }
            title="Contratos notariales"
            desc="Cada inversión respaldada con contrato legal verificado"
          />

          {/* Phone — centro y dominante */}
          <div className="relative z-10">
            {/* Shadow bajo el teléfono */}
            <div
              style={{
                position: "absolute",
                bottom: "-32px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "160px",
                height: "40px",
                background: "radial-gradient(ellipse, rgba(28,15,76,0.25), transparent 70%)",
                filter: "blur(14px)",
                pointerEvents: "none",
              }}
            />
            <PhoneMockup />
          </div>
        </div>

        {/* Stats row — debajo del teléfono */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-xl mx-auto">
          {[
            { value: "2 min", label: "Para registrarte" },
            { value: "100%", label: "Online" },
            { value: "S/10K", label: "Inversión mínima" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center rounded-xl py-4 px-3"
              style={{ background: "#ffffff", border: "1px solid #d2dcea", boxShadow: "0 1px 3px rgba(8,10,30,0.04)" }}
            >
              <p className="text-xl font-black gradient-text">{s.value}</p>
              <p className="text-xs font-semibold mt-0.5" style={{ color: "rgba(8,11,30,0.45)" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
