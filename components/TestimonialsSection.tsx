"use client";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    initials: "JP",
    name: "Jorge Paredes",
    city: "Miraflores, Lima",
    role: "Ingeniero de Software",
    planAmount: "S/ 5,000",
    quote:
      "Llevo años buscando una alternativa real a los depósitos bancarios. Con Platita.pe puedo invertir en bienes raíces desde el celular, sin necesitar cientos de miles de soles.",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
  },
  {
    initials: "VS",
    name: "Valeria Soto",
    city: "Arequipa",
    role: "Médico residente",
    planAmount: "S/ 1,500",
    quote:
      "Nunca pensé que podría invertir en inmuebles con mi sueldo. Platita.pe democratiza algo que siempre fue solo para los que ya tienen plata. Me apunté al instante.",
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
  {
    initials: "CM",
    name: "Carlos Meza",
    city: "San Isidro, Lima",
    role: "Contador independiente",
    planAmount: "S/ 10,000",
    quote:
      "Como contador conozco bien las tasas bancarias. Un 22% anual respaldado por activos inmobiliarios reales es exactamente lo que mis clientes y yo necesitábamos.",
    gradient: "linear-gradient(135deg,#22d3ee,#06b6d4)",
    accent: "#22d3ee",
    accentRgb: "34,211,238",
  },
  {
    initials: "LR",
    name: "Lucía Ríos",
    city: "Trujillo",
    role: "Empresaria",
    planAmount: "S/ 3,000",
    quote:
      "En Trujillo las opciones de inversión formal son limitadas. Platita.pe abre el acceso a proyectos de Lima y del país entero desde donde estés. Eso cambia todo.",
    gradient: "linear-gradient(135deg,#ec4899,#f97316)",
    accent: "#ec4899",
    accentRgb: "236,72,153",
  },
];

const REASONS = [
  { value: "+500", label: "Ya en lista de espera", color: "#22d3ee" },
  { value: "22%",  label: "Rentabilidad anual estimada", color: "#a78bfa" },
  { value: "S/500", label: "Inversión mínima", color: "#22d3ee" },
  { value: "0",    label: "Comisiones de entrada", color: "#a78bfa" },
];

const SLIDE_DURATION = 4500; // ms por slide

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive]     = useState(0);
  const [animDir, setAnimDir]   = useState<"in" | "out">("in");
  const timerRef                = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const go = (next: number) => {
    setAnimDir("out");
    timerRef.current = setTimeout(() => {
      setActive(next);
      setAnimDir("in");
    }, 320);
  };

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonials.length;
        go(next);
        return prev; // real change happens inside go → setTimeout
      });
    }, SLIDE_DURATION);
    return () => {
      clearInterval(id);
      clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = testimonials[active];

  return (
    <section
      id="testimonios"
      className="py-16 md:py-24 px-4"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0f0929 0%, #08061a 100%)",
      }}
    >
      {/* ── Llama de fondo — contraste lateral ──────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/llama-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          height: "110%",
          width: "auto",
          maxWidth: "52%",
          objectFit: "contain",
          objectPosition: "left center",
          opacity: 0.07,
          pointerEvents: "none",
          userSelect: "none",
          filter: "grayscale(100%) brightness(4) contrast(0.7)",
        }}
      />

      {/* Glow orb que sigue el acento activo */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: t.accent,
          opacity: 0.06,
          filter: "blur(90px)",
          transition: "background 0.6s ease",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1024px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "white",
              margin: "0 0 12px",
              lineHeight: 1.15,
            }}
          >
            Lo que dicen los{" "}
            <span className="gradient-text">primeros en unirse</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", margin: 0 }}>
            Personas reales que ya reservaron su lugar
          </p>
        </div>

        {/* Slide card */}
        <div
          className="rounded-3xl p-6 md:p-12"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
            overflow: "hidden",
            transition: "opacity 0.32s ease, transform 0.32s ease",
            opacity: animDir === "in" ? 1 : 0,
            transform: animDir === "in" ? "translateY(0)" : "translateY(12px)",
          }}
        >
          {/* Accent border top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, ${t.accent}66, transparent)`,
              transition: "background 0.5s",
            }}
          />

          {/* Big quote mark */}
          <div
            className="hidden md:block"
            style={{
              fontSize: "9rem",
              lineHeight: 0.75,
              fontFamily: "Georgia, serif",
              color: t.accent,
              opacity: 0.12,
              position: "absolute",
              top: "20px",
              left: "28px",
              userSelect: "none",
              transition: "color 0.5s",
            }}
          >
            "
          </div>

          {/* Inner layout: stack en móvil, side-by-side en desktop */}
          <div className="flex flex-col md:grid md:items-center gap-6 md:gap-10"
            style={{ gridTemplateColumns: "1fr auto" }}
          >
            {/* Left — quote + person */}
            <div className="flex flex-col gap-5">
              <Stars />

              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                "{t.quote}"
              </p>

              {/* Person row */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: t.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: "white",
                    flexShrink: 0,
                    transition: "background 0.5s",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>
                    {t.name}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Right — investment intent: horizontal en móvil, vertical en desktop */}
            <div
              className="flex md:flex-col items-center md:items-center justify-between md:justify-center gap-4 md:gap-0 rounded-2xl p-4 md:p-6"
              style={{
                background: `rgba(${t.accentRgb},0.07)`,
                border: `1px solid rgba(${t.accentRgb},0.2)`,
                transition: "background 0.5s, border-color 0.5s",
                minWidth: 0,
              }}
            >
              {/* Amount */}
              <div className="flex flex-col md:items-center md:text-center gap-1">
                <p
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.58rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Planea invertir
                </p>
                <p
                  style={{
                    color: t.accent,
                    fontSize: "1.7rem",
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1,
                    transition: "color 0.5s",
                  }}
                >
                  {t.planAmount}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.28)",
                    fontSize: "0.65rem",
                    margin: 0,
                  }}
                >
                  al lanzamiento
                </p>
              </div>

              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  background: "rgba(34,211,238,0.1)",
                  border: "1px solid rgba(34,211,238,0.25)",
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  color: "#22d3ee",
                  whiteSpace: "nowrap",
                  marginTop: "0",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22d3ee",
                    boxShadow: "0 0 6px #22d3ee",
                    animation: "pulse-dot 2s infinite",
                    flexShrink: 0,
                  }}
                />
                En lista de espera
              </div>
            </div>
          </div>

          {/* Progress bar autoslide */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <div
              key={active} // reset animation on slide change
              style={{
                height: "100%",
                background: t.accent,
                animation: `slide-progress ${SLIDE_DURATION}ms linear forwards`,
              }}
            />
          </div>
        </div>

        {/* Dot indicators only */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Testimonio ${i + 1}`}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                border: "none",
                background: i === active ? item.accent : "rgba(255,255,255,0.18)",
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14">
          {REASONS.map((r, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "20px 12px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  margin: "0 0 4px",
                  color: r.color,
                }}
              >
                {r.value}
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,0.38)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {r.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
