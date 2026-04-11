"use client";

const team = [
  {
    initials: "PA",
    name: "Hedut ",
    role: "CEO & Co-fundador",
    bio: "Emprendedor con trayectoria en fintech y mercado inmobiliario peruano. Apasionado por democratizar el acceso a inversiones de alto impacto.",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
    tags: ["Fintech", "Real Estate", "Startups"],
    linkedin: "#",
  },
  {
    initials: "RL",
    name: "Ricardo Luna",
    role: "CTO & Co-fundador",
    bio: "Ingeniero de software con experiencia en plataformas de inversión digital. Lidera la arquitectura tecnológica de Platita.pe.",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    tags: ["Ingeniería", "Producto", "IA"],
    linkedin: "#",
  },
  {
    initials: "MC",
    name: "María Castillo",
    role: "CFO & Co-fundadora",
    bio: "Especialista en estructuración financiera e inversiones alternativas. Asegura que cada sol invertido tenga el mayor retorno posible.",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    tags: ["Finanzas", "Inversiones", "Compliance"],
    linkedin: "#",
  },
];

export default function EquipoSection() {
  return (
    <section className="py-24 px-4 section-alt">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(139,92,246,0.3)",
              color: "#a78bfa",
            }}
          >
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            El equipo detrás de{" "}
            <span className="gradient-text">Platita.pe</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Peruanos apasionados por hacer que más personas accedan a inversiones que antes solo eran para pocos
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-7 flex flex-col gap-5 group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: member.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    fontWeight: 900,
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-snug">{member.name}</p>
                  <p className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", flex: 1 }}>
                {member.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                className="flex items-center gap-2 text-xs font-semibold transition-all"
                style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#22d3ee")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Ver perfil en LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{
            background: "rgba(34,211,238,0.05)",
            border: "1px solid rgba(34,211,238,0.15)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Somos un equipo en crecimiento.{" "}
            <a href="mailto:hola@platita.pe" style={{ color: "#22d3ee", fontWeight: 600 }}>
              ¿Quieres sumarte?
            </a>{" "}
            Buscamos talento apasionado por las finanzas y la tecnología.
          </p>
        </div>
      </div>
    </section>
  );
}
