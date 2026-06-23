"use client";
import { useState } from "react";
import Image from "next/image";
import ToastNotifications from "./ToastNotifications";
import { WA_CHANNEL_URL } from "@/lib/config";

const ANNUAL_RATE = 0.16;
const MIN_AMOUNT  = 10000;
const MAX_AMOUNT  = 1000000;

const PERIODS = [
  { months: 3,  label: "3m",  available: false },
  { months: 6,  label: "6m",  available: false },
  { months: 12, label: "12m", available: true  },
  { months: 18, label: "18m", available: true  },
  { months: 24, label: "24m", available: true  },
];

function fmt(n: number) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function HeroSection() {
  const [showSim, setShowSim] = useState(false);
  const [amount, setAmount]          = useState(10000);
  const [rawInput, setRawInput]      = useState("10000");
  const [months, setMonths]          = useState(12);

  const earnings = amount * ANNUAL_RATE * (months / 12);
  const total    = amount + earnings;
  const roiPct   = ((earnings / amount) * 100).toFixed(1);

  return (
    <>
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ height: "calc(100vh - 64px)", marginTop: "64px" }}
    >
      {/* ── Background image — oculta en móvil ── */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* ── Background ── */}

      {/* Dot grid — full width, subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(28,15,76,0.048) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Glow — right-bottom, behind llama */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "0%",
          bottom: "0%",
          width: "55%",
          height: "75%",
          background: "radial-gradient(ellipse 65% 70% at 65% 90%, rgba(188,69,233,0.16) 0%, rgba(108,180,255,0.10) 55%, transparent 80%)",
          filter: "blur(32px)",
        }}
      />
      {/* Glow — top center-right accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "15%",
          top: "5%",
          width: "30%",
          height: "40%",
          background: "radial-gradient(ellipse, rgba(108,180,255,0.10) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
      {/* Left brand accent bar */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 0, top: 0,
          width: "3px",
          height: "55%",
          background: "linear-gradient(180deg, #6cdcff 0%, #bc45e9 60%, transparent 100%)",
          opacity: 0.55,
        }}
      />

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-5 py-8">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">

          {/* LEFT — text */}
          <div className="flex-1 flex flex-col justify-center gap-5 md:pr-10 pb-12 md:pb-16">

            {/* Badge */}
            <div
              className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase"
              style={{
                background: "rgba(12,18,55,0.05)",
                border: "1px solid rgba(12,18,55,0.13)",
                color: "#1c0f4c",
              }}
            >
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#bc45e9", boxShadow: "0 0 6px #bc45e9",
                animation: "pulse-dot 1.5s infinite", flexShrink: 0,
              }} />
              Próximamente · Perú
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-black leading-[1.02] tracking-tight" style={{ color: "#1c0f4c" }}>
              Invierte y gana
              <br />
              <span className="gradient-text-cyan">hasta 16%</span>
              <br />
              <span style={{ color: "rgba(8,11,30,0.55)", fontWeight: 800 }}>de retorno anual</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: "rgba(8,11,30,0.54)" }}>
              Invierte desde <strong style={{ color: "#1c0f4c" }}>S/10,000</strong> en proyectos
              inmobiliarios del Perú verificados. 100% online, sin trámites.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <a
                href="#registro"
                className="btn-gradient px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide"
              >
                Unirse a la lista de espera →
              </a>
              <button
                onClick={() => setShowSim((v) => !v)}
                className="px-8 py-3.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(12,18,55,0.16)",
                  color: "#1c0f4c",
                  background: "rgba(12,18,55,0.03)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Simula tu inversión
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(8,11,30,0.40)" }}>
              <div className="flex -space-x-1.5">
                {["#bc45e9","#6cdcff","#8b5cf6"].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center text-[9px] font-black text-white"
                    style={{ background: c, borderColor: "#ffffff" }}
                  >
                    {["P","M","R"][i]}
                  </div>
                ))}
              </div>
              <span>+500 personas ya en lista de espera</span>
            </div>

            {/* Trust badges — fintech solemn style */}
            <div className="flex flex-wrap gap-2">
              {[
                { svg: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>, text: "100% seguro" },
                { svg: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, text: "Contratos notariales" },
                { svg: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: "Proyectos en Perú" },
              ].map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold"
                  style={{
                    background: "rgba(12,18,55,0.04)",
                    border: "1px solid rgba(12,18,55,0.10)",
                    color: "rgba(8,11,30,0.55)",
                  }}
                >
                  {b.svg}
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ── Simulador panel — light theme, desliza desde la derecha ── */}
    <div
      style={{
        position: "fixed",
        top: 0, right: 0,
        height: "100dvh",
        width: "min(420px, 100vw)",
        zIndex: 100,
        transform: showSim ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        display: "flex",
        flexDirection: "column",
        background: "#f8fbff",
        backdropFilter: "blur(24px)",
        borderLeft: "1px solid #d2dcea",
        boxShadow: showSim ? "-12px 0 60px rgba(8,10,30,0.12)" : "none",
      }}
    >
      {/* Borde animado cyan→magenta de izquierda a derecha */}
      <div className="sim-border-ltr" />

      <div className="flex items-center justify-between p-5 pb-0">
        <div>
          <p className="font-black text-lg" style={{ color: "#1c0f4c" }}>Simulador de inversión</p>
          <p className="text-xs font-medium" style={{ color: "rgba(8,11,30,0.45)" }}>Estimación al 16% anual</p>
        </div>
        <button
          onClick={() => setShowSim(false)}
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(12,18,55,0.06)", border: "1px solid rgba(12,18,55,0.10)" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1c0f4c" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">

        {/* ── Monto ── */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: "rgba(8,11,30,0.50)" }}>Monto a invertir</span>
            <span className="text-xs" style={{ color: "rgba(8,11,30,0.35)" }}>mín. S/ 10,000</span>
          </div>
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-4 font-black text-lg select-none pointer-events-none" style={{ color: "#bc45e9" }}>S/</span>
            <input
              type="number"
              value={rawInput}
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              onChange={(e) => {
                setRawInput(e.target.value);
                const n = Number(e.target.value);
                if (!isNaN(n) && n >= MIN_AMOUNT) setAmount(Math.min(MAX_AMOUNT, n));
              }}
              onBlur={() => {
                const clamped = Math.min(MAX_AMOUNT, Math.max(MIN_AMOUNT, Number(rawInput) || MIN_AMOUNT));
                setAmount(clamped); setRawInput(String(clamped));
              }}
              className="form-input-light text-xl"
              style={{ paddingLeft: "3.5rem" }}
            />
          </div>
          <div className="flex gap-2 mt-2.5 flex-wrap">
            {[10000, 25000, 50000, 100000].map((v) => (
              <button key={v} onClick={() => { setAmount(v); setRawInput(String(v)); }}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                style={{
                  background: amount === v ? "rgba(188,69,233,0.10)" : "#ffffff",
                  border: amount === v ? "1.5px solid rgba(188,69,233,0.40)" : "1px solid #d2dcea",
                  color: amount === v ? "#bc45e9" : "rgba(8,11,30,0.45)",
                }}
              >
                S/{v >= 1000 ? `${v / 1000}k` : v}
              </button>
            ))}
          </div>
        </div>

        {/* ── Período ── */}
        <div>
          <span className="text-xs font-semibold mb-2 block" style={{ color: "rgba(8,11,30,0.50)" }}>Período de inversión</span>
          <div className="grid grid-cols-5 gap-1.5">
            {PERIODS.map((p) => (
              <div key={p.months} className="relative">
                <button
                  onClick={() => p.available && setMonths(p.months)}
                  className="w-full py-2.5 rounded-lg text-xs font-bold transition-all"
                  style={{
                    background: !p.available
                      ? "rgba(12,18,55,0.03)"
                      : months === p.months
                        ? "linear-gradient(135deg, #6cdcff, #bc45e9)"
                        : "#ffffff",
                    border: !p.available
                      ? "1px solid rgba(12,18,55,0.06)"
                      : months === p.months
                        ? "none"
                        : "1px solid #d2dcea",
                    color: !p.available
                      ? "rgba(8,11,30,0.22)"
                      : months === p.months
                        ? "white"
                        : "rgba(8,11,30,0.55)",
                    boxShadow: p.available && months === p.months ? "0 4px 16px rgba(188,69,233,0.28)" : "none",
                    cursor: p.available ? "pointer" : "default",
                  }}
                >{p.label}</button>
                {!p.available && <span className="absolute top-0.5 right-0.5 text-[9px] opacity-30 pointer-events-none select-none">🔒</span>}
              </div>
            ))}
          </div>
        </div>

        {/* ── Resultados ── */}
        <div className="rounded-xl p-5 relative overflow-hidden"
          style={{ background: "#ffffff", border: "1.5px solid #d2dcea", boxShadow: "0 2px 12px rgba(8,10,30,0.06)" }}
        >
          {/* mini borde animado en el card de resultado */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #6cdcff 0%, #bc45e9 50%, #6cdcff 100%)", backgroundSize: "200% 100%", animation: "border-sweep-ltr 2.8s ease-in-out infinite" }} />
          <div className="space-y-3.5 pt-1">
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: "rgba(8,11,30,0.45)" }}>Tu inversión</span>
              <span key={`inv-${amount}`} className="text-xl font-black sim-result-value" style={{ color: "#1c0f4c" }}>S/ {fmt(amount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold" style={{ color: "#bc45e9" }}>Ganancia estimada</span>
              <div className="text-right">
                <span key={`earn-${amount}-${months}`} className="text-xl font-black sim-result-value block" style={{ color: "#bc45e9" }}>+S/ {fmt(earnings)}</span>
                <span className="text-xs" style={{ color: "rgba(188,69,233,0.60)" }}>{roiPct}% en {months} meses</span>
              </div>
            </div>
            <div className="h-px" style={{ background: "#e8eef6" }} />
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold" style={{ color: "#1c0f4c" }}>Total al final</span>
              <span key={`total-${amount}-${months}`} className="text-2xl font-black sim-result-value" style={{ color: "#1c0f4c" }}>S/ {fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl" style={{ background: "rgba(12,18,55,0.04)", border: "1px solid rgba(12,18,55,0.09)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(8,11,30,0.40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-xs" style={{ color: "rgba(8,11,30,0.42)" }}>
            Proyección referencial al 16% anual. Respaldo legal: Contrato mutuo.
          </p>
        </div>

        <a href="#registro" onClick={() => setShowSim(false)}
          className="btn-gradient text-center py-3.5 rounded-xl font-bold text-base">
          Quiero invertir ahora
        </a>

        {/* WA */}
        <a href={WA_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl p-4 transition-all hover:scale-[1.01]"
          style={{ background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.22)" }}
        >
          <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(37,211,102,0.14)" }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold" style={{ color: "#1c0f4c" }}>Únete a nuestro canal</p>
            <p className="text-xs" style={{ color: "rgba(8,11,30,0.42)" }}>Ofertas exclusivas antes del lanzamiento</p>
          </div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(8,11,30,0.30)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>

    {showSim && (
      <div
        onClick={() => setShowSim(false)}
        style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(0,0,0,0.25)", backdropFilter: "blur(2px)", animation: "count-up 0.3s ease-out" }}
      />
    )}

    <ToastNotifications />
    </>
  );
}
