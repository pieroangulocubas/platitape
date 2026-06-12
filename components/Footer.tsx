import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-10 px-4 border-t overflow-hidden"
      style={{ borderColor: "rgba(28,15,76,0.10)", background: "#e3eaf5" }}
    >
      {/* Llama decorativa fondo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/llama-bg.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "110%",
          width: "auto",
          filter: "brightness(0) saturate(100%) invert(7%) sepia(72%) saturate(1700%) hue-rotate(245deg)",
          opacity: 0.05,
          transform: "translateX(20%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Isotipo */}
          <a href="#" className="flex items-center">
            <Image
              src="/isotipo.svg"
              alt="Platita.pe"
              width={150}
              height={44}
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "rgba(15,10,46,0.50)" }}>
            <a href="#como-funciona" style={{ color: "inherit" }} className="hover:opacity-80 transition-opacity">¿Cómo funciona?</a>
            <a href="#beneficios"    style={{ color: "inherit" }} className="hover:opacity-80 transition-opacity">Beneficios</a>
            <a href="#simulador"     style={{ color: "inherit" }} className="hover:opacity-80 transition-opacity">Simulador</a>
            <a href="#registro"      style={{ color: "inherit" }} className="hover:opacity-80 transition-opacity">Registro</a>
          </div>

          {/* Legal */}
          <p className="text-xs text-center md:text-right" style={{ color: "rgba(15,10,46,0.40)" }}>
            © {new Date().getFullYear()} Platita.pe
            <br />Todos los derechos reservados
          </p>
        </div>

        <div
          className="mt-10 pt-6 border-t text-center text-xs"
          style={{ borderColor: "rgba(28,15,76,0.10)", color: "rgba(15,10,46,0.38)" }}
        >
          Las inversiones están sujetas a riesgo. La rentabilidad pasada no garantiza resultados futuros.
          Platita.pe opera bajo la normativa vigente de la SBS y la SMV del Perú.
        </div>
      </div>
    </footer>
  );
}
