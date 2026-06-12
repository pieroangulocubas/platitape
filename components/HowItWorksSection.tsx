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

const steps: Step[] = [
  {
    number: "01",
    icon: <IconUserCheck c="#1c0f4c" />,
    title: "Regístrate gratis",
    description: "Completa tu perfil en minutos. Sin costos de apertura ni comisiones ocultas. Tu cuenta está lista al instante.",
    color: "#1c0f4c",
  },
  {
    number: "02",
    icon: <IconBuilding c="#bc45e9" />,
    title: "Elige tu proyecto",
    description: "Explora proyectos inmobiliarios curados y verificados. Selecciona según tus metas y el capital que deseas invertir.",
    color: "#bc45e9",
  },
  {
    number: "03",
    icon: <IconArrowUpCircle c="#6cdcff" />,
    title: "Invierte desde S/10,000",
    description: "Realiza tu inversión de forma segura y 100% online. Monitorea tu portafolio y rentabilidad en tiempo real.",
    color: "#6cdcff",
  },
  {
    number: "04",
    icon: <IconAward c="#1c0f4c" />,
    title: "Recibe tus ganancias",
    description: "Cobra tus rendimientos de acuerdo al período elegido. Reinvierte o retira a tu cuenta bancaria sin complicaciones.",
    color: "#1c0f4c",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 px-4" style={{ background: "#eef2f9" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(28,15,76,0.07)", border: "1px solid rgba(28,15,76,0.14)", color: "#1c0f4c" }}
          >
            Proceso simple
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4" style={{ color: "#0f0a2e" }}>
            ¿Cómo{" "}
            <span className="gradient-text">funciona?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(15,10,46,0.5)" }}>
            4 pasos para que tu dinero trabaje por ti en el sector inmobiliario peruano
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop only, sits behind cards in the gap */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: "54px",
              left: "calc(12.5% + 4px)",
              right: "calc(12.5% + 4px)",
              height: "2px",
              background: "linear-gradient(90deg, #bc45e9 0%, #6cdcff 50%, #bc45e9 100%)",
              opacity: 0.25,
              zIndex: 0,
              borderRadius: "99px",
            }}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-3xl p-7 flex flex-col gap-4 group hover:-translate-y-2 transition-all duration-300"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e6e3f5",
                  boxShadow: "0 1px 4px rgba(28,15,76,0.06), 0 4px 20px rgba(28,15,76,0.04)",
                }}
              >
                <div className="step-number">{step.number}</div>

                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(28,15,76,0.06)",
                    border: "1px solid rgba(28,15,76,0.1)",
                  }}
                >
                  {step.icon}
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0f0a2e" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(15,10,46,0.5)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
