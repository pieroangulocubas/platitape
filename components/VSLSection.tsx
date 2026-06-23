"use client";
import { useRef, useState } from "react";

const WAVEFORM_HEIGHTS = Array.from({ length: 40 }, (_, i) =>
  Number((8 + Math.abs(Math.sin(i * 0.7) * 18 + Math.sin(i * 1.4 + 1) * 10)).toFixed(2))
);

export default function VSLSection() {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-20 px-4" style={{ background: "#eef2f9" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full inline-block mb-4"
            style={{ background: "rgba(188,69,233,0.08)", border: "1px solid rgba(188,69,233,0.22)", color: "#bc45e9" }}
          >
            Por qué elegirnos
          </span>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#1c0f4c" }}>
            Por qué invertir en{" "}
            <span className="gradient-text-cyan">Platita.pe</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: "rgba(15,10,46,0.55)" }}>
            Miles de peruanos ya reservaron su lugar — descubre por qué en 1:23 min
          </p>
        </div>

        {/* Video player */}
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            aspectRatio: "16/9",
            background: "#1c0f4c",
            boxShadow: "0 24px 80px rgba(28,15,76,0.16), 0 4px 20px rgba(28,15,76,0.08)",
            border: "1px solid rgba(28,15,76,0.08)",
          }}
        >
          {/* Native video — always in DOM so ref works */}
          <video
            ref={videoRef}
            src="/platita-vsl.mp4"
            controls
            playsInline
            className="absolute inset-0 w-full h-full"
            style={{ display: active ? "block" : "none" }}
          />

          {!active && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer select-none"
              style={{ background: "linear-gradient(135deg, #080417 0%, #150d38 50%, #0c1833 100%)" }}
              onClick={() => { setActive(true); setTimeout(() => videoRef.current?.play(), 50); }}
            >
              {/* Grid background */}
              <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(108,220,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(108,220,255,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }} />

              {/* Glow blobs */}
              <div className="absolute pointer-events-none" style={{ left: "8%", top: "15%", width: 200, height: 200, borderRadius: "50%", background: "rgba(188,69,233,0.13)", filter: "blur(70px)" }} />
              <div className="absolute pointer-events-none" style={{ right: "8%", bottom: "15%", width: 180, height: 180, borderRadius: "50%", background: "rgba(108,220,255,0.10)", filter: "blur(70px)" }} />

              {/* Duration badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "rgba(108,220,255,0.12)", color: "#6cdcff", border: "1px solid rgba(108,220,255,0.25)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                1:23 min
              </div>

              {/* VSL badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: "rgba(188,69,233,0.15)", color: "#bc45e9", border: "1px solid rgba(188,69,233,0.3)" }}>
                VSL
              </div>

              {/* Main content */}
              <div className="text-center z-10 px-6 md:px-12">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(108,220,255,0.65)" }}>
                  Conoce la oportunidad
                </p>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight">
                  ¿Por qué invertir en<br />
                  <span style={{ background: "linear-gradient(90deg, #6cdcff, #bc45e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Platita.pe?
                  </span>
                </h3>

                {/* Stats row */}
                <div className="flex items-center justify-center gap-5 md:gap-8 mt-4 mb-7">
                  {[
                    { value: "16%",   label: "anual est.", color: "#6cdcff" },
                    { value: "S/10K", label: "mínimo",    color: "#ffffff" },
                    { value: "+500",  label: "inscritos",  color: "#bc45e9" },
                  ].map((s, i, arr) => (
                    <div key={s.label} className="flex items-center gap-5 md:gap-8">
                      <div className="text-center">
                        <p className="text-xl md:text-2xl font-black leading-none" style={{ color: s.color }}>{s.value}</p>
                        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.38)" }}>{s.label}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px h-7" style={{ background: "rgba(255,255,255,0.12)" }} />
                      )}
                    </div>
                  ))}
                </div>

                <button className="play-btn mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28" style={{ marginLeft: "4px" }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Ver el video completo
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Trust strip below video */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: "🔒", text: "Inversión respaldada en activos reales" },
            { icon: "📋", text: "Contratos legales notariales" },
            { icon: "🇵🇪", text: "Proyectos verificados en Perú" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-sm" style={{ color: "rgba(15,10,46,0.52)" }}>
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
