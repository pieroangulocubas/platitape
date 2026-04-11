/** Phone mockup with dashboard preview — todo CSS, sin imágenes externas */

const portfolio = [
  { name: "Torre Miraflores 360", roi: "+20%", amount: "S/1,000", progress: 78, color: "#22d3ee" },
  { name: "Viva San Isidro",      roi: "+22%", amount: "S/2,000", progress: 92, color: "#a78bfa" },
];

function PhoneMockup() {
  return (
    <div
      style={{
        width: "260px",
        borderRadius: "36px",
        background: "#0a0818",
        border: "1.5px solid rgba(255,255,255,0.12)",
        boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.06)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 0" }}>
        <div style={{ width: "80px", height: "22px", background: "#000", borderRadius: "12px" }} />
      </div>

      {/* Status bar */}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 20px", fontSize: "0.6rem", color: "rgba(255,255,255,0.4)" }}>
        <span>9:41</span>
        <span>●●●●  WiFi  100%</span>
      </div>

      {/* App content */}
      <div style={{ padding: "8px 16px 20px" }}>

        {/* Greeting */}
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", margin: "0 0 2px" }}>Hola, Jorge 👋</p>
        <p style={{ color: "white", fontWeight: 800, fontSize: "0.9rem", margin: "0 0 14px" }}>Mi portafolio</p>

        {/* Total balance card */}
        <div
          style={{
            borderRadius: "16px",
            padding: "14px",
            background: "linear-gradient(135deg,rgba(34,211,238,0.2),rgba(139,92,246,0.15))",
            border: "1px solid rgba(34,211,238,0.25)",
            marginBottom: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.58rem", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Total invertido
          </p>
          <p style={{ color: "white", fontWeight: 900, fontSize: "1.4rem", margin: "0 0 6px", lineHeight: 1 }}>
            S/ 3,000
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.7rem", fontWeight: 700 }}>↑ +S/ 330</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem" }}>ganancia acumulada</span>
          </div>
          {/* Mini sparkline */}
          <svg viewBox="0 0 160 30" style={{ width: "100%", marginTop: "8px" }}>
            <polyline
              points="0,28 20,24 40,22 60,18 80,15 100,12 120,8 140,5 160,3"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
            <polyline
              points="0,28 20,24 40,22 60,18 80,15 100,12 120,8 140,5 160,3 160,30 0,30"
              fill="url(#sparkGrad)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Projects list */}
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>
          Mis proyectos
        </p>
        {portfolio.map((p, i) => (
          <div
            key={i}
            style={{
              borderRadius: "12px",
              padding: "10px 12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              marginBottom: "8px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ color: "white", fontSize: "0.65rem", fontWeight: 700 }}>{p.name}</span>
              <span style={{ color: p.color, fontSize: "0.65rem", fontWeight: 800 }}>{p.roi}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.58rem" }}>{p.amount} invertidos</span>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.58rem" }}>{p.progress}%</span>
            </div>
            <div style={{ height: "3px", background: "rgba(255,255,255,0.08)", borderRadius: "99px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${p.progress}%`, background: p.color, borderRadius: "99px" }} />
            </div>
          </div>
        ))}

        {/* CTA button */}
        <div
          style={{
            marginTop: "12px",
            padding: "10px",
            borderRadius: "12px",
            background: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
            textAlign: "center",
            fontSize: "0.7rem",
            fontWeight: 800,
            color: "white",
          }}
        >
          + Explorar proyectos
        </div>
      </div>

      {/* Home indicator */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "8px" }}>
        <div style={{ width: "100px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "99px" }} />
      </div>
    </div>
  );
}

const features = [
  {
    icon: "📊",
    title: "Dashboard en tiempo real",
    desc: "Ve el rendimiento de tus proyectos, ganancias acumuladas y proyecciones actualizadas al instante.",
    color: "#22d3ee",
  },
  {
    icon: "🔔",
    title: "Alertas inteligentes",
    desc: "Notificaciones cuando tu proyecto alcanza hitos, cuando hay nuevas oportunidades y al cobrar tus retornos.",
    color: "#a78bfa",
  },
  {
    icon: "📄",
    title: "Documentación digital",
    desc: "Accede a todos tus contratos, estados financieros y reportes de cada proyecto desde la app.",
    color: "#ec4899",
  },
  {
    icon: "🔐",
    title: "Seguridad bancaria",
    desc: "Cifrado de extremo a extremo, autenticación biométrica y 2FA para proteger tu cuenta.",
    color: "#22d3ee",
  },
];

export default function AppPreviewSection() {
  return (
    <section className="py-24 px-4" style={{ background: "#08061a" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              color: "#a78bfa",
            }}
          >
            La plataforma
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            Todo en la palma{" "}
            <span className="gradient-text">de tu mano</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Una app diseñada para que invertir en bienes raíces sea tan fácil como comprar en línea
          </p>
        </div>

        {/* Content: phone + features */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Phone — centered on mobile */}
          <div className="flex justify-center md:justify-start flex-shrink-0">
            {/* Glow under phone */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "200px",
                  height: "80px",
                  background: "radial-gradient(ellipse, rgba(34,211,238,0.25), transparent 70%)",
                  filter: "blur(20px)",
                  pointerEvents: "none",
                }}
              />
              <PhoneMockup />
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `rgba(${f.color === "#22d3ee" ? "34,211,238" : f.color === "#a78bfa" ? "139,92,246" : "236,72,153"},0.12)`,
                    border: `1px solid ${f.color}30`,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">{f.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
