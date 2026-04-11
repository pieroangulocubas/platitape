import { ReactNode } from "react";

/* ── SVG icons inline — sin emojis ──────────────────── */
const IconTrendingUp = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconCoins = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);
const IconShieldCheck = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const IconLock = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconBarChart = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6"  y1="20" x2="6"  y2="14" />
  </svg>
);
const IconZap = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
  accent: string;
  tag: string;
}

const benefits: Benefit[] = [
  {
    icon: <IconTrendingUp c="#22d3ee" />,
    title: "Alta rentabilidad",
    description: "Obtén del 10% al 22% anual, muy por encima de un depósito bancario tradicional o de la inflación.",
    accent: "#22d3ee",
    tag: "Hasta 22% anual",
  },
  {
    icon: <IconCoins c="#8b5cf6" />,
    title: "Inversión mínima accesible",
    description: "Comienza desde S/500. No necesitas ser millonario para invertir en bienes raíces premium del Perú.",
    accent: "#8b5cf6",
    tag: "Desde S/500",
  },
  {
    icon: <IconShieldCheck c="#22d3ee" />,
    title: "Proyectos verificados",
    description: "Cada proyecto pasa por un riguroso proceso de due diligence legal, financiero e inmobiliario antes de publicarse.",
    accent: "#22d3ee",
    tag: "Due diligence",
  },
  {
    icon: <IconLock c="#ec4899" />,
    title: "100% online y seguro",
    description: "Gestiona todo desde tu celular o computadora. Plataforma segura con cifrado bancario y autenticación de dos factores.",
    accent: "#ec4899",
    tag: "Fintech seguro",
  },
  {
    icon: <IconBarChart c="#8b5cf6" />,
    title: "Transparencia total",
    description: "Accede a reportes detallados de cada proyecto, actualizaciones en tiempo real y estados financieros claros.",
    accent: "#8b5cf6",
    tag: "Reportes en tiempo real",
  },
  {
    icon: <IconZap c="#22d3ee" />,
    title: "Sin complicaciones",
    description: "Olvídate de trámites, notarías y dolores de cabeza. Nosotros manejamos todo el proceso inmobiliario por ti.",
    accent: "#22d3ee",
    tag: "Proceso simplificado",
  },
];

function accentRgb(hex: string) {
  if (hex === "#22d3ee") return "34,211,238";
  if (hex === "#8b5cf6") return "139,92,246";
  return "236,72,153";
}

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 px-4" style={{ background: "#08061a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.25)", color: "#22d3ee" }}
          >
            Por qué Platita
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            La forma más inteligente de{" "}
            <span className="gradient-text">invertir en el Perú</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Todo lo que necesitas para hacer crecer tu patrimonio, en una sola plataforma
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-7 group hover:-translate-y-2 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Tag */}
              <span
                className="self-start text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: `rgba(${accentRgb(b.accent)},0.12)`,
                  color: b.accent,
                  border: `1px solid ${b.accent}30`,
                }}
              >
                {b.tag}
              </span>

              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${accentRgb(b.accent)},0.1)`,
                  border: `1px solid rgba(${accentRgb(b.accent)},0.2)`,
                }}
              >
                {b.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {b.description}
                </p>
              </div>

              {/* Accent line */}
              <div
                className="h-0.5 w-12 rounded-full mt-auto opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"
                style={{ background: b.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
