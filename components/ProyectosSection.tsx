/**
 * ProyectosSection — cards with real-estate visual headers (CSS renders)
 * Each card has a "project image" built with gradients + a building SVG,
 * mimicking architectural renders until real photography is added.
 */

interface Project {
  name: string;
  location: string;
  type: string;
  roi: string;
  plazo: string;
  min: string;
  funded: number;
  tag: string;
  tagColor: string;
  /** Sky gradient for the card image area */
  skyFrom: string;
  skyTo: string;
  /** Tint color for ground/facade */
  buildingColor: string;
}

const projects: Project[] = [
  {
    name: "Torre Miraflores 360",
    location: "Miraflores, Lima",
    type: "Residencial premium",
    roi: "20%",
    plazo: "12 meses",
    min: "S/ 1,000",
    funded: 78,
    tag: "En financiamiento",
    tagColor: "#22d3ee",
    skyFrom: "#0a1e3d",
    skyTo: "#1a3a5c",
    buildingColor: "#d4af87",
  },
  {
    name: "Condominio Los Olivos",
    location: "Los Olivos, Lima",
    type: "Multifamiliar",
    roi: "18%",
    plazo: "18 meses",
    min: "S/ 10,000",
    funded: 45,
    tag: "Próximamente",
    tagColor: "#a78bfa",
    skyFrom: "#1a0a2e",
    skyTo: "#2d1a5c",
    buildingColor: "#c8b8e8",
  },
  {
    name: "Viva San Isidro",
    location: "San Isidro, Lima",
    type: "Oficinas corporativas",
    roi: "18%",
    plazo: "12 meses",
    min: "S/ 2,000",
    funded: 92,
    tag: "Casi lleno",
    tagColor: "#ec4899",
    skyFrom: "#0a1a10",
    skyTo: "#1a3a20",
    buildingColor: "#a8d5b0",
  },
  {
    name: "Parque Surco Verde",
    location: "Santiago de Surco, Lima",
    type: "Ecodesarrollo mixto",
    roi: "19%",
    plazo: "24 meses",
    min: "S/ 10,000",
    funded: 30,
    tag: "Nuevo",
    tagColor: "#f97316",
    skyFrom: "#1a1200",
    skyTo: "#3a2a00",
    buildingColor: "#f5d58a",
  },
];

/** Minimal building SVG silhouette — abstract city skyline */
function BuildingSVG({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 320 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", position: "absolute", bottom: 0, left: 0 }}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Ground line */}
      <rect x="0" y="130" width="320" height="10" fill={color} opacity="0.25" />
      {/* Far buildings */}
      <rect x="10"  y="80"  width="30" height="50" fill={color} opacity="0.12" />
      <rect x="50"  y="60"  width="20" height="70" fill={color} opacity="0.10" />
      <rect x="80"  y="90"  width="25" height="40" fill={color} opacity="0.12" />
      <rect x="250" y="70"  width="28" height="60" fill={color} opacity="0.10" />
      <rect x="285" y="85"  width="22" height="45" fill={color} opacity="0.12" />
      {/* Main tower */}
      <rect x="130" y="20"  width="60" height="110" fill={color} opacity="0.22" />
      <rect x="140" y="10"  width="40" height="20"  fill={color} opacity="0.18" />
      {/* Tower windows */}
      {[30, 45, 60, 75, 90, 105].map((y) => (
        <g key={y}>
          <rect x="138" y={y} width="8" height="6" fill={color} opacity="0.35" rx="1" />
          <rect x="152" y={y} width="8" height="6" fill={color} opacity="0.35" rx="1" />
          <rect x="166" y={y} width="8" height="6" fill={color} opacity="0.35" rx="1" />
          <rect x="180" y={y} width="8" height="6" fill={color} opacity="0.35" rx="1" />
        </g>
      ))}
      {/* Side buildings */}
      <rect x="110" y="50"  width="22" height="80" fill={color} opacity="0.15" />
      <rect x="188" y="40"  width="22" height="90" fill={color} opacity="0.15" />
      {/* Antenna */}
      <line x1="160" y1="10" x2="160" y2="0" stroke={color} strokeWidth="2" opacity="0.3" />
    </svg>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const filledColor =
    p.tagColor === "#22d3ee"
      ? "rgba(34,211,238,0.2)"
      : p.tagColor === "#a78bfa"
      ? "rgba(167,139,250,0.2)"
      : p.tagColor === "#ec4899"
      ? "rgba(236,72,153,0.2)"
      : "rgba(249,115,22,0.2)";

  return (
    <div
      className="rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: "1px solid #d2dcea",
        boxShadow: "0 1px 4px rgba(28,15,76,0.06), 0 4px 20px rgba(28,15,76,0.04)",
      }}
    >
      {/* ── Project image area ───────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "180px",
          background: `linear-gradient(170deg, ${p.skyFrom} 0%, ${p.skyTo} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Stars scatter */}
        {[
          [20, 15], [60, 30], [90, 10], [150, 20], [200, 8], [240, 25], [280, 15], [310, 35],
          [35, 50], [110, 40], [175, 45], [265, 38],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 2 : 1,
              borderRadius: "50%",
              background: "white",
              opacity: 0.4 + (i % 3) * 0.2,
            }}
          />
        ))}
        {/* Glow orb (moon/sun effect) */}
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 24,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: p.buildingColor,
            opacity: 0.18,
            filter: "blur(6px)",
          }}
        />
        {/* Building silhouette */}
        <BuildingSVG color={p.buildingColor} />
        {/* Ground mist */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40px",
            background: `linear-gradient(to top, ${p.skyTo}cc, transparent)`,
          }}
        />
        {/* Tag badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "0.65rem",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: p.tagColor,
            background: filledColor,
            border: `1px solid ${p.tagColor}55`,
            backdropFilter: "blur(8px)",
          }}
        >
          {p.tag}
        </div>
        {/* ROI badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "0.7rem",
            fontWeight: 800,
            color: "white",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {p.roi} anual
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────── */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        {/* Title & location */}
        <div>
          <h3 style={{ color: "#0f0a2e", fontWeight: 800, fontSize: "1rem", margin: 0, lineHeight: 1.3 }}>
            {p.name}
          </h3>
          <p style={{ color: "rgba(15,10,46,0.45)", fontSize: "0.75rem", margin: "4px 0 0", fontWeight: 500 }}>
            {p.location} · {p.type}
          </p>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { label: "Plazo", value: p.plazo },
            { label: "Inversión mín.", value: p.min },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                background: "#eef2f9",
                border: "1px solid #d2dcea",
                borderRadius: "10px",
                padding: "8px 10px",
              }}
            >
              <p style={{ color: "rgba(15,10,46,0.4)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                {s.label}
              </p>
              <p style={{ color: "#0f0a2e", fontWeight: 700, fontSize: "0.8rem", margin: "2px 0 0" }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Funding progress */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ color: "rgba(15,10,46,0.45)", fontSize: "0.7rem", fontWeight: 600 }}>
              Financiado
            </span>
            <span style={{ color: p.tagColor, fontSize: "0.7rem", fontWeight: 800 }}>
              {p.funded}%
            </span>
          </div>
          <div style={{ height: "6px", background: "rgba(28,15,76,0.08)", borderRadius: "99px", overflow: "hidden" }}>
            <div
              style={{
                height: "100%",
                width: `${p.funded}%`,
                borderRadius: "99px",
                background: `linear-gradient(90deg, ${p.tagColor}, ${p.tagColor}99)`,
                transition: "width 0.8s ease",
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <a
          href="#registro"
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px",
            borderRadius: "12px",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: p.tagColor,
            background: filledColor,
            border: `1px solid ${p.tagColor}44`,
            textDecoration: "none",
            transition: "all 0.2s",
            marginTop: "auto",
          }}
        >
          Me interesa →
        </a>
      </div>
    </div>
  );
}

export default function ProyectosSection() {
  return (
    <section id="proyectos" className="py-24 px-4" style={{ background: "#eef2f9" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(28,15,76,0.07)", border: "1px solid rgba(28,15,76,0.14)", color: "#1c0f4c" }}
          >
            Oportunidades
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4" style={{ color: "#0f0a2e" }}>
            Proyectos{" "}
            <span className="gradient-text">disponibles</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(15,10,46,0.5)" }}>
            Proyectos inmobiliarios verificados, con due diligence completo y retornos comprobados
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-xs" style={{ color: "rgba(15,10,46,0.3)" }}>
          *Porcentajes de financiamiento y disponibilidad son referenciales. Sujeto a cambios.
        </p>
      </div>
    </section>
  );
}
