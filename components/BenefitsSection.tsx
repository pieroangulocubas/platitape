import { ReactNode } from "react";

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
    icon: <IconTrendingUp c="#1c0f4c" />,
    title: "Alta rentabilidad",
    description: "Obtén del 10% al 16% anual, muy por encima de un depósito bancario tradicional o de la inflación.",
    accent: "#1c0f4c",
    tag: "Hasta 16% anual",
  },
  {
    icon: <IconCoins c="#bc45e9" />,
    title: "Inversión mínima accesible",
    description: "Comienza desde S/10,000. No necesitas comprar una propiedad entera para invertir en bienes raíces premium del Perú.",
    accent: "#bc45e9",
    tag: "Desde S/10,000",
  },
  {
    icon: <IconShieldCheck c="#1c0f4c" />,
    title: "Proyectos verificados",
    description: "Cada proyecto pasa por un riguroso proceso de due diligence legal, financiero e inmobiliario antes de publicarse.",
    accent: "#1c0f4c",
    tag: "Due diligence",
  },
  {
    icon: <IconLock c="#6cdcff" />,
    title: "100% online y seguro",
    description: "Gestiona todo desde tu celular o computadora. Plataforma segura con cifrado bancario y autenticación de dos factores.",
    accent: "#6cdcff",
    tag: "Fintech seguro",
  },
  {
    icon: <IconBarChart c="#bc45e9" />,
    title: "Transparencia total",
    description: "Accede a reportes detallados de cada proyecto, actualizaciones en tiempo real y estados financieros claros.",
    accent: "#bc45e9",
    tag: "Reportes en tiempo real",
  },
  {
    icon: <IconZap c="#1c0f4c" />,
    title: "Sin complicaciones",
    description: "Olvídate de trámites, notarías y dolores de cabeza. Nosotros manejamos todo el proceso inmobiliario por ti.",
    accent: "#1c0f4c",
    tag: "Proceso simplificado",
  },
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 px-4" style={{ background: "#eef2f9" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md"
            style={{ background: "rgba(12,18,55,0.06)", border: "1px solid rgba(12,18,55,0.12)", color: "#1c0f4c" }}
          >
            Por qué Platita
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3" style={{ color: "#1c0f4c" }}>
            La forma más inteligente de{" "}
            <span className="gradient-text">invertir en el Perú</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(8,11,30,0.50)" }}>
            Todo lo que necesitas para hacer crecer tu patrimonio, en una sola plataforma
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-xl p-6 group hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              style={{
                background: "#ffffff",
                border: "1px solid #d2dcea",
                boxShadow: "0 1px 3px rgba(8,10,30,0.04), 0 4px 16px rgba(8,10,30,0.07)",
              }}
            >
              {/* Tag */}
              <span
                className="self-start text-xs font-bold px-2.5 py-1 rounded-md"
                style={{
                  background: "rgba(12,18,55,0.05)",
                  color: "#1c0f4c",
                  border: "1px solid rgba(12,18,55,0.10)",
                }}
              >
                {b.tag}
              </span>

              {/* Icon box */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(12,18,55,0.05)",
                  border: "1px solid rgba(12,18,55,0.09)",
                }}
              >
                {b.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-lg mb-1.5" style={{ color: "#1c0f4c" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(8,11,30,0.50)" }}>
                  {b.description}
                </p>
              </div>

              {/* Accent line */}
              <div
                className="h-0.5 w-10 rounded-full mt-auto opacity-35 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #6cdcff, #bc45e9)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
