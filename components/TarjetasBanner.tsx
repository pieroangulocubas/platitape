import Image from "next/image";

export default function TarjetasBanner() {
  return (
    <section
      className="relative overflow-hidden py-24 px-4"
      style={{
        background: "#eef2f9",
      }}
    >
      {/* Glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #6cdcff, transparent 70%)" }}
      />
      {/* Glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-75 blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #bc45e9, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-6">

        {/* Imagen protagonista — 60% del ancho en desktop */}
        <div className="w-full lg:w-[60%] flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Glow detrás de la imagen */}
            <div
              className="absolute inset-0 scale-90 blur-3xl opacity-50 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 60%, #bc45e9 0%, #6cdcff 60%, transparent 80%)" }}
            />
            <Image
              src="/tarjetas.jpg"
              alt="Tarjetas Platita.pe — Visa"
              width={760}
              height={540}
              className="relative z-10 w-full rounded-3xl"
              style={{ filter: "drop-shadow(0 40px 80px rgba(188,69,233,0.6))" }}
            />
          </div>
        </div>

        {/* Texto secundario — 40% */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(108,220,255,0.1)",
              border: "1px solid rgba(108,220,255,0.3)",
              color: "#6cdcff",
            }}
          >
            Próximamente
          </div>

          <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ color: "#0f0a2e" }}>
            Tu tarjeta{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6cdcff 6%, #bc45e9 89%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Platita.pe
            </span>
          </h2>

          <p className="text-base leading-relaxed" style={{ color: "rgba(15,10,46,0.60)" }}>
            Tu propia tarjeta Visa para gestionar inversiones, cobrar rendimientos
            y pagar en cualquier lugar del mundo.
          </p>

          <ul className="flex flex-col gap-2.5 w-full">
            {[
              "Accede a tus rendimientos al instante",
              "Acepta en millones de comercios Visa",
              "Diseño exclusivo con tu llama favorita",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black"
                  style={{
                    background: "linear-gradient(135deg, #6cdcff, #bc45e9)",
                    color: "#1c0f4c",
                  }}
                >
                  ✓
                </span>
                <span className="text-sm" style={{ color: "rgba(15,10,46,0.65)" }}>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#registro"
            className="btn-gradient px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 mt-1"
          >
            Quiero mi tarjeta
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
