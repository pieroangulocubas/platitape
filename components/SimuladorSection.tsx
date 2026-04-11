"use client";
import { useState } from "react";

const ANNUAL_RATE = 0.22;
const MIN_AMOUNT  = 500;
const MAX_AMOUNT  = 50000;

const periods = [
  { months: 3,  label: "3 meses",  available: false },
  { months: 6,  label: "6 meses",  available: false },
  { months: 12, label: "12 meses", available: true  },
  { months: 18, label: "18 meses", available: false },
  { months: 24, label: "24 meses", available: false },
];

/** Formateador determinista — evita hydration mismatch por locale del servidor */
function fmt(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clampAmount(v: number) {
  return Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, v));
}

export default function SimuladorSection() {
  const [amount, setAmount]     = useState<number>(1000);
  const [rawInput, setRawInput] = useState<string>("1000"); // texto libre mientras escribe
  const [months, setMonths]     = useState<number>(12);

  const earnings  = amount * ANNUAL_RATE * (months / 12);
  const total     = amount + earnings;
  const roiPct    = ((earnings / amount) * 100).toFixed(1);
  const barWidth  = Math.min(100, (months / 24) * 100);
  const amtPct    = ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;

  return (
    <section
      id="simulador"
      className="py-28 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #050312 0%, #0d0726 45%, #060418 100%)",
      }}
    >
      {/* Glow orbs de fondo */}
      <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(34,211,238,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", right: "10%", width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Decorative "22%" flotante */}
      <div
        style={{
          position: "absolute", left: "-2%", top: "50%", transform: "translateY(-50%)",
          fontSize: "22vw", fontWeight: 900, lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(34,211,238,0.06)",
          userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em",
        }}
      >
        22%
      </div>

      {/* Llama */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/llama-bg.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-6%", bottom: "-5%", height: "90%", width: "auto", maxWidth: "45%", objectFit: "contain", objectPosition: "right bottom", opacity: 0.04, pointerEvents: "none", userSelect: "none", filter: "grayscale(100%) brightness(3)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", color: "#22d3ee" }}
          >
            Simulador de inversión
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-5 mb-4 leading-tight">
            ¿Cuánto puede crecer{" "}
            <span className="gradient-text">tu platita?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Mueve el slider, escribe tu monto y mira tu retorno en tiempo real
          </p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(34,211,238,0.18)",
            boxShadow: "0 0 80px rgba(34,211,238,0.07), 0 0 0 1px rgba(34,211,238,0.06) inset",
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: inputs ─────────────────────────────── */}
            <div className="space-y-8">
              {/* Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Monto a invertir
                  </label>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                    mín. S/500
                  </span>
                </div>
                <div className="relative">
                  <span
                    className="absolute top-1/2 -translate-y-1/2 font-bold text-xl select-none pointer-events-none"
                    style={{ color: "#22d3ee", left: "1rem" }}
                  >
                    S/
                  </span>
                  <input
                    type="number"
                    value={rawInput}
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={1}
                    onChange={(e) => {
                      // Permite escribir libremente sin cortar el texto
                      setRawInput(e.target.value);
                      const n = Number(e.target.value);
                      if (!isNaN(n) && n >= MIN_AMOUNT) {
                        setAmount(clampAmount(n));
                      }
                    }}
                    onBlur={() => {
                      // Al salir del campo, clampea y sincroniza el texto
                      const clamped = clampAmount(Number(rawInput) || MIN_AMOUNT);
                      setAmount(clamped);
                      setRawInput(String(clamped));
                    }}
                    className="form-input text-xl font-bold"
                    style={{ paddingLeft: "3.75rem" }}
                  />
                </div>

                {/* Amount range slider — step 1 para deslizamiento suave */}
                <div className="mt-3">
                  <input
                    type="range"
                    min={MIN_AMOUNT}
                    max={MAX_AMOUNT}
                    step={1}
                    value={amount}
                    onChange={(e) => {
                      const n = Number(e.target.value);
                      setAmount(n);
                      setRawInput(String(n));
                    }}
                    className="w-full"
                    style={{
                      accentColor: "#22d3ee",
                      height: "4px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                {/* Quick amount chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[500, 1000, 5000, 10000].map((v) => (
                    <button
                      key={v}
                      onClick={() => { setAmount(v); setRawInput(String(v)); }}
                      className="px-3 py-1 rounded-lg text-xs font-semibold transition-all"
                      style={{
                        background: amount === v ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.06)",
                        border: amount === v ? "1px solid rgba(34,211,238,0.5)" : "1px solid rgba(255,255,255,0.1)",
                        color: amount === v ? "#22d3ee" : "rgba(255,255,255,0.5)",
                      }}
                    >
                      S/{v.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Period */}
              <div>
                <label className="text-sm font-semibold mb-3 block" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Período de inversión
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {periods.map((p) => (
                    <div key={p.months} className="relative">
                      <button
                        onClick={() => p.available && setMonths(p.months)}
                        className="w-full py-2.5 rounded-xl text-xs font-bold transition-all"
                        style={{
                          background: p.available
                            ? months === p.months
                              ? "linear-gradient(135deg,#22d3ee,#8b5cf6)"
                              : "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.03)",
                          border: p.available
                            ? months === p.months
                              ? "none"
                              : "1px solid rgba(255,255,255,0.1)"
                            : "1px solid rgba(255,255,255,0.05)",
                          color: p.available
                            ? months === p.months ? "white" : "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.2)",
                          boxShadow: p.available && months === p.months
                            ? "0 4px 20px rgba(34,211,238,0.3)"
                            : "none",
                          cursor: p.available ? "pointer" : "default",
                          filter: p.available ? "none" : "blur(0.4px)",
                        }}
                      >
                        {p.label}
                      </button>
                      {/* Lock overlay for unavailable periods */}
                      {!p.available && (
                        <span
                          className="absolute top-0.5 right-1 text-xs leading-none select-none pointer-events-none"
                          style={{ opacity: 0.45 }}
                          title="Disponible pronto"
                        >
                          🔒
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${barWidth}%`,
                      background: "linear-gradient(90deg,#22d3ee,#8b5cf6)",
                    }}
                  />
                </div>
              </div>

              {/* Rate note */}
              <div
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
              >
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Tasa estimada: 22% anual</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Basado en rentabilidad histórica de nuestros proyectos
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT: results ───────────────────────────── */}
            <div className="flex flex-col gap-4">
              {/* Initial */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Tu inversión inicial
                </p>
                <p className="text-3xl font-black text-white">S/ {fmt(amount)}</p>
              </div>

              {/* Earnings */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.25)" }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20"
                  style={{ background: "#22d3ee" }}
                />
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#22d3ee" }}>
                  Ganancia estimada
                </p>
                <p className="text-4xl font-black" style={{ color: "#22d3ee" }}>
                  +S/ {fmt(earnings)}
                </p>
                <p className="text-sm mt-1" style={{ color: "rgba(34,211,238,0.7)" }}>
                  {roiPct}% en {months} meses
                </p>
              </div>

              {/* Total */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(236,72,153,0.1) 100%)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                  style={{ background: "#8b5cf6" }}
                />
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "rgba(167,139,250,0.8)" }}>
                  Total al final del período
                </p>
                <p className="font-black text-white" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.1 }}>S/ {fmt(total)}</p>
                <p className="text-sm mt-2" style={{ color: "rgba(167,139,250,0.65)" }}>
                  Disponible al vencer los {months} meses
                </p>
              </div>

              <a
                href="#registro"
                className="btn-gradient text-center py-4 rounded-2xl font-bold text-base"
              >
                <span>Quiero invertir ahora</span>
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.25)" }}>
                *Proyección al 22% anual. Las inversiones están sujetas a riesgo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
