import { ReactNode } from "react";

const IconUserCheck = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);
const IconBuilding = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconArrowUpCircle = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </svg>
);
const IconAward = ({ c }: { c: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

interface Step {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

function rgb(hex: string) {
  if (hex === "#22d3ee") return "34,211,238";
  if (hex === "#8b5cf6") return "139,92,246";
  return "236,72,153";
}

const steps: Step[] = [
  {
    number: "01",
    icon: <IconUserCheck c="#22d3ee" />,
    title: "Regístrate gratis",
    description: "Completa tu perfil en minutos. Sin costos de apertura ni comisiones ocultas. Tu cuenta está lista al instante.",
    color: "#22d3ee",
  },
  {
    number: "02",
    icon: <IconBuilding c="#8b5cf6" />,
    title: "Elige tu proyecto",
    description: "Explora proyectos inmobiliarios curados y verificados. Selecciona según tus metas y el capital que deseas invertir.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: <IconArrowUpCircle c="#ec4899" />,
    title: "Invierte desde S/500",
    description: "Realiza tu inversión de forma segura y 100% online. Monitorea tu portafolio y rentabilidad en tiempo real.",
    color: "#ec4899",
  },
  {
    number: "04",
    icon: <IconAward c="#22d3ee" />,
    title: "Recibe tus ganancias",
    description: "Cobra tus rendimientos de acuerdo al período elegido. Reinvierte o retira a tu cuenta bancaria sin complicaciones.",
    color: "#22d3ee",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section-alt py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}
          >
            Proceso simple
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            ¿Cómo{" "}
            <span className="gradient-text">funciona?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            4 pasos para que tu dinero trabaje por ti en el sector inmobiliario peruano
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-7 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300"
              style={{ borderColor: `rgba(${rgb(step.color)},0.15)` }}
            >
              <div className="step-number">{step.number}</div>

              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background: `rgba(${rgb(step.color)},0.12)`,
                  border: `1px solid rgba(${rgb(step.color)},0.25)`,
                }}
              >
                {step.icon}
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#registro" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold">
            <span>Empezar ahora</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
