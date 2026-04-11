"use client";
import { useState, useEffect, useRef } from "react";
import ToastNotifications from "./ToastNotifications";

const ANNUAL_RATE = 0.22;
const MIN_AMOUNT  = 500;
const MAX_AMOUNT  = 50000;

const PERIODS = [
  { months: 3,  label: "3m",  available: false },
  { months: 6,  label: "6m",  available: false },
  { months: 12, label: "12m", available: true  },
  { months: 18, label: "18m", available: false },
  { months: 24, label: "24m", available: false },
];

function fmt(n: number) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";
const WA_CHANNEL_URL   = "https://whatsapp.com/channel/platitape";

// Alturas precalculadas para evitar hydration mismatch (Math.sin es determinista pero
// puede diferir en precisión entre Node y el browser en algunos entornos)
const WAVEFORM_HEIGHTS = Array.from({ length: 40 }, (_, i) =>
  Number((8 + Math.abs(Math.sin(i * 0.7) * 18 + Math.sin(i * 1.4 + 1) * 10)).toFixed(2))
);

export default function HeroSection() {
  const [videoActive, setVideoActive] = useState(false);
  const [showSim, setShowSim]         = useState(false);
  const [amount, setAmount]           = useState(5000);
  const [rawInput, setRawInput]       = useState("5000");
  const [months, setMonths]           = useState(12);

  const gridRef     = useRef<HTMLDivElement>(null);
  const orbPurple   = useRef<HTMLDivElement>(null);
  const orbCyan     = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const llamaRef    = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (gridRef.current)
          gridRef.current.style.transform = `translateY(${y * 0.12}px)`;
        if (orbPurple.current)
          orbPurple.current.style.transform = `translateY(${y * 0.22}px)`;
        if (orbCyan.current)
          orbCyan.current.style.transform = `translateY(${y * -0.14}px)`;
        if (headlineRef.current)
          headlineRef.current.style.transform = `translateY(${y * 0.06}px)`;
        if (llamaRef.current)
          llamaRef.current.style.transform = `translateY(${y * 0.18}px) translateX(18%)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const earnings = amount * ANNUAL_RATE * (months / 12);
  const total    = amount + earnings;
  const roiPct   = ((earnings / amount) * 100).toFixed(1);

  return (
    <>
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">

      {/* Background grid — parallax lento */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-10 will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(rgba(188,69,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(188,69,233,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs — parallax independiente */}
      <div ref={orbPurple}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none will-change-transform"
        style={{ background: "radial-gradient(circle, #bc45e9, transparent)" }} />
      <div ref={orbCyan}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none will-change-transform"
        style={{ background: "radial-gradient(circle, #6cdcff, transparent)" }} />

      {/* Llama — solo desktop, asoma desde la derecha con parallax */}
      <div className="hidden md:block absolute right-0 bottom-0 top-0 pointer-events-none overflow-hidden" style={{ width: "42%" }}>
        {/* Glow de colores detrás de la llama */}
        <div
          className="absolute bottom-0 right-0 w-full h-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 90% 80%, rgba(108,220,255,0.12) 0%, rgba(188,69,233,0.1) 50%, transparent 80%)",
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={llamaRef}
          src="/llama-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-2%",
            right: 0,
            height: "88%",
            width: "auto",
            filter: "brightness(0) invert(1)",
            opacity: 0.07,
            transform: "translateX(18%)",
            willChange: "transform",
          }}
        />
      </div>

      {/* ── Hero content — siempre centrado ── */}
      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center gap-10">

        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: "rgba(108,220,255,0.1)", border: "1px solid rgba(108,220,255,0.3)", color: "#6cdcff" }}
          >
            <span className="badge-dot" />
            Próximamente en Perú
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{ background: "rgba(188,69,233,0.1)", border: "1px solid rgba(188,69,233,0.3)", color: "#cc6ef0" }}
          >
            <span style={{
              width: "7px", height: "7px", borderRadius: "50%",
              background: "#bc45e9", boxShadow: "0 0 8px #bc45e9",
              animation: "pulse-dot 1.5s infinite", flexShrink: 0,
            }} />
            Solo quedan <strong style={{ color: "white" }}>&nbsp;47 lugares</strong>&nbsp;de acceso anticipado
          </div>
        </div>

        {/* Headline — parallax suave */}
        <div ref={headlineRef} className="text-center max-w-3xl will-change-transform">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-white mb-4">
            Haz crecer{" "}
            <span className="gradient-text-cyan">tu platita</span>
            <br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>en bienes raíces</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mt-6 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Invierte desde <strong className="text-white">S/500</strong> en proyectos
            inmobiliarios del Perú. Rentabilidades del{" "}
            <strong className="text-white">10 al 22% anual</strong>. 100% online.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => setShowSim((v) => !v)}
            className="btn-gradient px-8 py-4 rounded-full text-base font-bold flex items-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            {showSim ? "Cerrar simulador" : "Simula tu inversión"}
          </button>
          <a href="#como-funciona" className="btn-outline px-8 py-4 rounded-full text-base flex items-center gap-2">
            <span>▶</span>
            Ver cómo funciona
          </a>
        </div>
      </div>

      {/* VSL Video */}
      <div className="relative z-10 w-full max-w-3xl mt-14 mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden relative" style={{ aspectRatio: "16/9" }}>
          {!videoActive ? (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
              style={{ background: "linear-gradient(135deg, rgba(188,69,233,0.4) 0%, rgba(28,15,76,0.9) 100%)" }}
              onClick={() => setVideoActive(true)}
            >
              <div className="absolute bottom-8 left-0 right-0 flex items-end justify-center gap-1 opacity-30">
                {WAVEFORM_HEIGHTS.map((h, i) => (
                  <div key={i} className="w-1 rounded-full" style={{ height: `${h}px`, background: "#6cdcff" }} />
                ))}
              </div>
              <div className="text-center z-10">
                <button className="play-btn mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28" style={{ marginLeft: "4px" }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-white font-bold text-lg">Ver el video</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>Descubre cómo funciona Platita.pe — 3 min</p>
              </div>
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(108,220,255,0.2)", color: "#6cdcff", border: "1px solid rgba(108,220,255,0.3)" }}
              >
                VSL
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Platita.pe — Video explicativo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>

    </section>

    {/* ── Panel simulador — fijo, desliza desde la derecha ── */}
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100dvh",
        width: "min(420px, 100vw)",
        zIndex: 100,
        transform: showSim ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        display: "flex",
        flexDirection: "column",
        background: "rgba(22, 10, 58, 0.75)",
        backdropFilter: "blur(24px)",
        borderLeft: "1px solid rgba(108,220,255,0.2)",
        boxShadow: showSim ? "-20px 0 80px rgba(188,69,233,0.2)" : "none",
      }}
    >
      {/* Shimmer top border */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: "linear-gradient(90deg, transparent, #6cdcff, #bc45e9, transparent)",
        backgroundSize: "200% 100%",
        animation: "shimmer-bar 2.5s linear infinite",
      }} />

      {/* Header del panel */}
      <div className="flex items-center justify-between p-5 pb-0">
        <div>
          <p className="text-white font-black text-lg">Simulador</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>hasta 22% anual</p>
        </div>
        <button
          onClick={() => setShowSim(false)}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Contenido scrollable */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">

        {/* Amount */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>Monto a invertir</span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>mín. S/500</span>
          </div>
          <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-4 font-black text-lg select-none pointer-events-none" style={{ color: "#6cdcff" }}>S/</span>
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
                setAmount(clamped);
                setRawInput(String(clamped));
              }}
              className="form-input text-xl font-black"
              style={{ paddingLeft: "3.5rem" }}
            />
          </div>
          <input
            type="range"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step={500}
            value={amount}
            onChange={(e) => { const n = Number(e.target.value); setAmount(n); setRawInput(String(n)); }}
            className="w-full mt-3"
            style={{ accentColor: "#6cdcff", height: "4px", cursor: "pointer" }}
          />
          <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.25)" }}>
            <span>S/500</span><span>S/50,000</span>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {[1000, 5000, 10000, 20000].map((v) => (
              <button
                key={v}
                onClick={() => { setAmount(v); setRawInput(String(v)); }}
                className="px-3 py-1 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: amount === v ? "rgba(108,220,255,0.2)" : "rgba(255,255,255,0.06)",
                  border: amount === v ? "1px solid rgba(108,220,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                  color: amount === v ? "#6cdcff" : "rgba(255,255,255,0.4)",
                }}
              >
                S/{v >= 1000 ? `${v / 1000}k` : v}
              </button>
            ))}
          </div>
        </div>

        {/* Period */}
        <div>
          <span className="text-xs font-semibold mb-2 block" style={{ color: "rgba(255,255,255,0.45)" }}>Período de inversión</span>
          <div className="grid grid-cols-5 gap-1.5">
            {PERIODS.map((p) => (
              <div key={p.months} className="relative">
                <button
                  onClick={() => p.available && setMonths(p.months)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold transition-all"
                  style={{
                    background: !p.available ? "rgba(255,255,255,0.03)" : months === p.months ? "linear-gradient(135deg, #6cdcff, #bc45e9)" : "rgba(255,255,255,0.06)",
                    border: !p.available ? "1px solid rgba(255,255,255,0.05)" : months === p.months ? "none" : "1px solid rgba(255,255,255,0.1)",
                    color: !p.available ? "rgba(255,255,255,0.2)" : months === p.months ? "white" : "rgba(255,255,255,0.5)",
                    boxShadow: p.available && months === p.months ? "0 4px 20px rgba(108,220,255,0.3)" : "none",
                    cursor: p.available ? "pointer" : "default",
                  }}
                >
                  {p.label}
                </button>
                {!p.available && (
                  <span className="absolute top-0.5 right-0.5 text-[9px] opacity-40 pointer-events-none select-none">🔒</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(108,220,255,0.08), rgba(188,69,233,0.12))",
            border: "1px solid rgba(108,220,255,0.2)",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "2px",
            background: "linear-gradient(90deg, transparent, #6cdcff, #bc45e9, transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer-bar 2.5s linear infinite",
          }} />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Tu inversión</span>
              <span key={`inv-${amount}`} className="text-xl font-black text-white sim-result-value">S/ {fmt(amount)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm" style={{ color: "#6cdcff" }}>Ganancia estimada</span>
              <div className="text-right">
                <span key={`earn-${amount}-${months}`} className="text-xl font-black sim-result-value block" style={{ color: "#6cdcff" }}>+S/ {fmt(earnings)}</span>
                <span className="text-xs" style={{ color: "rgba(108,220,255,0.6)" }}>{roiPct}% en {months} meses</span>
              </div>
            </div>
            <div className="h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Total al final</span>
              <span key={`total-${amount}-${months}`} className="text-2xl font-black text-white sim-result-value">S/ {fmt(total)}</span>
            </div>
          </div>
        </div>

        {/* Rate note */}
        <div
          className="flex items-center gap-3 p-4 rounded-2xl"
          style={{ background: "rgba(188,69,233,0.1)", border: "1px solid rgba(188,69,233,0.2)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bc45e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            Proyección al 22% anual. Las inversiones están sujetas a riesgo.
          </p>
        </div>

        <a href="#registro" onClick={() => setShowSim(false)} className="btn-gradient text-center py-4 rounded-2xl font-bold text-base">
          Quiero invertir ahora
        </a>

        {/* WA channel */}
        <a
          href={WA_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl p-4 transition-all hover:scale-[1.02]"
          style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)" }}
        >
          <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.2)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white">Únete a nuestro canal</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>No te pierdas nada — ofertas exclusivas</p>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

      </div>
    </div>

    {/* Backdrop semitransparente al abrir el panel */}
    {showSim && (
      <div
        onClick={() => setShowSim(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(2px)",
          animation: "count-up 0.3s ease-out",
        }}
      />
    )}

    <ToastNotifications />
    </>
  );
}
