"use client";
import { useState } from "react";

const ANNUAL_RATE = 0.16;
const MIN_AMOUNT  = 10000;
const MAX_AMOUNT  = 1000000;

const periods = [
  { months: 3,  label: "3 meses",  available: false },
  { months: 6,  label: "6 meses",  available: false },
  { months: 12, label: "12 meses", available: true  },
  { months: 18, label: "18 meses", available: true  },
  { months: 24, label: "24 meses", available: true  },
];

function fmt(n: number) {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clampAmount(v: number) {
  return Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, v));
}

// Light input style
const inputStyle: React.CSSProperties = {
  background: "#eef2f9",
  border: "1px solid #dddaf5",
  color: "#1c0f4c",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  width: "100%",
  fontSize: "1.2rem",
  fontWeight: 700,
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
  paddingLeft: "3.75rem",
};

export default function SimuladorSection() {
  const [amount, setAmount]     = useState<number>(10000);
  const [rawInput, setRawInput] = useState<string>("10000");
  const [months, setMonths]     = useState<number>(12);

  const earnings        = amount * ANNUAL_RATE * (months / 12);
  const total           = amount + earnings;
  const roiPct          = ((earnings / amount) * 100).toFixed(1);
  const monthlyEarnings = amount * ANNUAL_RATE / 12;
  const barWidth        = Math.min(100, (months / 24) * 100);

  return (
    <section
      id="simulador"
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: "#eef2f9" }}
    >
      {/* Decorative "16%" flotante */}
      <div
        style={{
          position: "absolute", left: "-2%", top: "50%", transform: "translateY(-50%)",
          fontSize: "22vw", fontWeight: 900, lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(28,15,76,0.04)",
          userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em",
        }}
      >
        16%
      </div>

      {/* Llama decorativa */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/llama-bg.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "-6%", bottom: "-5%", height: "90%", width: "auto", maxWidth: "45%", objectFit: "contain", objectPosition: "right bottom", opacity: 0.04, pointerEvents: "none", userSelect: "none", filter: "grayscale(100%) brightness(0)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{ background: "rgba(28,15,76,0.07)", border: "1px solid rgba(28,15,76,0.14)", color: "#1c0f4c" }}
          >
            Simulador de inversión
          </span>
          <h2 className="text-5xl md:text-6xl font-black mt-5 mb-4 leading-tight" style={{ color: "#1c0f4c" }}>
            ¿Cuánto puede crecer{" "}
            <span className="gradient-text">tu platita?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(15,10,46,0.5)" }}>
            Escribe tu monto y mira tu retorno en tiempo real
          </p>
        </div>

        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "#ffffff",
            border: "1px solid #d2dcea",
            boxShadow: "0 4px 40px rgba(28,15,76,0.08)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* ── LEFT: inputs ─────────────────────────────── */}
            <div className="space-y-8">
              {/* Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold" style={{ color: "rgba(15,10,46,0.6)" }}>
                    Monto a invertir
                  </label>
                  <span className="text-xs" style={{ color: "rgba(15,10,46,0.35)" }}>
                    mín. S/10,000
                  </span>
                </div>
                <div className="relative">
                  <span
                    className="absolute top-1/2 -translate-y-1/2 font-bold text-xl select-none pointer-events-none"
                    style={{ color: "#bc45e9", left: "1rem" }}
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
                      setRawInput(e.target.value);
                      const n = Number(e.target.value);
                      if (!isNaN(n) && n >= MIN_AMOUNT) {
                        setAmount(clampAmount(n));
                      }
                    }}
                    onBlur={() => {
                      const clamped = clampAmount(Number(rawInput) || MIN_AMOUNT);
                      setAmount(clamped);
                      setRawInput(String(clamped));
                    }}
                    style={inputStyle}
                  />
                </div>

                {/* Quick amount chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {[10000, 25000, 50000, 100000].map((v) => (
                    <button
                      key={v}
                      onClick={() => { setAmount(v); setRawInput(String(v)); }}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                      style={{
                        background: amount === v ? "rgba(188,69,233,0.1)" : "#eef2f9",
                        border: amount === v ? "1px solid rgba(188,69,233,0.4)" : "1px solid #d2dcea",
                        color: amount === v ? "#bc45e9" : "rgba(15,10,46,0.5)",
                      }}
                    >
                      S/{v >= 1000 ? `${v / 1000}K` : v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Period */}
              <div>
                <label className="text-sm font-semibold mb-3 block" style={{ color: "rgba(15,10,46,0.6)" }}>
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
                              ? "linear-gradient(135deg,#6cdcff,#bc45e9)"
                              : "#eef2f9"
                            : "#e8edf6",
                          border: p.available
                            ? months === p.months
                              ? "none"
                              : "1px solid #d2dcea"
                            : "1px solid #d2dcea",
                          color: p.available
                            ? months === p.months ? "white" : "rgba(15,10,46,0.5)"
                            : "rgba(15,10,46,0.25)",
                          boxShadow: p.available && months === p.months
                            ? "0 4px 20px rgba(188,69,233,0.3)"
                            : "none",
                          cursor: p.available ? "pointer" : "default",
                        }}
                      >
                        {p.label}
                      </button>
                      {!p.available && (
                        <span
                          className="absolute top-0.5 right-1 text-xs leading-none select-none pointer-events-none"
                          style={{ opacity: 0.35 }}
                          title="Disponible pronto"
                        >
                          🔒
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(28,15,76,0.08)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${barWidth}%`,
                      background: "linear-gradient(90deg,#6cdcff,#bc45e9)",
                    }}
                  />
                </div>
              </div>

              {/* Rate note */}
              <div
                className="flex items-center gap-3 p-4 rounded-2xl"
                style={{ background: "rgba(28,15,76,0.04)", border: "1px solid rgba(28,15,76,0.1)" }}
              >
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(28,15,76,0.07)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#1c0f4c" }}>Tasa estimada: 16% anual</p>
                  <p className="text-xs" style={{ color: "rgba(15,10,46,0.45)" }}>
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
                style={{ background: "#eef2f9", border: "1px solid #d2dcea" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "rgba(15,10,46,0.4)" }}>
                  Tu inversión inicial
                </p>
                <p className="text-3xl font-black" style={{ color: "#1c0f4c" }}>S/ {fmt(amount)}</p>
              </div>

              {/* Earnings */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{ background: "rgba(108,220,255,0.08)", border: "1px solid rgba(108,220,255,0.3)" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#0097b2" }}>
                  Ganancia estimada al período
                </p>
                <p className="text-4xl font-black" style={{ color: "#0097b2" }}>
                  +S/ {fmt(earnings)}
                </p>
                <p className="text-sm mt-1" style={{ color: "rgba(0,151,178,0.7)" }}>
                  {roiPct}% en {months} meses
                </p>
              </div>

              {/* Monthly earnings */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(188,69,233,0.06)", border: "1px solid rgba(188,69,233,0.22)" }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "#bc45e9" }}>
                  Ganancia mensual (retiro)
                </p>
                <p className="text-3xl font-black" style={{ color: "#bc45e9" }}>
                  +S/ {fmt(monthlyEarnings)}
                </p>
                <p className="text-sm mt-1" style={{ color: "rgba(188,69,233,0.65)" }}>
                  1.3% mensual sobre tu inversión
                </p>
              </div>

              {/* Total */}
              <div
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #2d1a6e 0%, #1c0f4c 100%)",
                  border: "none",
                }}
              >
                <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Total al final del período
                </p>
                <p className="font-black text-white" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", lineHeight: 1.1 }}>S/ {fmt(total)}</p>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Disponible al vencer los {months} meses
                </p>
              </div>

              <a
                href="#registro"
                className="btn-gradient text-center py-4 rounded-2xl font-bold text-base"
              >
                <span>Quiero invertir ahora</span>
              </a>

              <p className="text-xs text-center" style={{ color: "rgba(15,10,46,0.3)" }}>
                *Proyección referencial al 16% anual. Respaldo legal: Contrato mutuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
