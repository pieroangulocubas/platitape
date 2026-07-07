/**
 * ProyectosSection — tipos de proyecto en los que se podrá invertir
 * (categorías ilustrativas, no listados de oportunidades activas)
 */
"use client";
import Image from "next/image";

interface ProjectType {
  name: string;
  description: string;
  roi: string;
  plazo: string;
  min: string;
  accent: string;
  image: string;
  featured?: boolean;
}

const projectTypes: ProjectType[] = [
  {
    name: "Habilitaciones urbanas",
    description: "Financiamiento de la habilitación de terrenos para lotización, dotándolos de pistas, veredas y servicios antes de su venta.",
    roi: "16%",
    plazo: "12 meses",
    min: "S/ 10,000",
    accent: "#ec4899",
    image: "/p-habilitaciones.PNG",
    featured: true,
  },
  {
    name: "Subastas de propiedades",
    description: "Adquisición de inmuebles rematados a precios preferenciales, con potencial de reventa o renta a mejor valor de mercado.",
    roi: "16%",
    plazo: "12 meses",
    min: "S/ 10,000",
    accent: "#22d3ee",
    image: "/p-subastas.PNG",
  },
  {
    name: "Construcción",
    description: "Financiamiento de obra para proyectos constructivos residenciales y comerciales, desde cimentación hasta entrega.",
    roi: "16%",
    plazo: "12 meses",
    min: "S/ 10,000",
    accent: "#a78bfa",
    image: "/p-construccion.PNG",
  },
  {
    name: "Compra de inmuebles",
    description: "Adquisición directa de propiedades para arriendo o reventa a mediano plazo, respaldadas por el activo físico.",
    roi: "16%",
    plazo: "12 meses",
    min: "S/ 10,000",
    accent: "#f97316",
    image: "/p-inmuebles.PNG",
  },
];

function ProjectCard({ p }: { p: ProjectType }) {
  return (
    <div
      className="rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        border: p.featured ? "1px solid #6cdcff" : "1px solid #d2dcea",
        boxShadow: p.featured
          ? "0 1px 4px rgba(28,15,76,0.08), 0 10px 32px rgba(108,220,255,0.25)"
          : "0 1px 4px rgba(28,15,76,0.08), 0 8px 28px rgba(28,15,76,0.08)",
        height: "100%",
      }}
    >
      {/* ── Photo ───────────────────────────── */}
      <div
        style={{
          position: "relative",
          height: "210px",
          overflow: "hidden",
          background: "#1c0f4c",
        }}
      >
        <Image
          src={p.image}
          alt={p.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="transition-transform duration-500 group-hover:scale-110"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Bottom gradient for legibility */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "55%",
            background: "linear-gradient(to top, rgba(11,7,31,0.85) 0%, rgba(11,7,31,0.15) 60%, transparent 100%)",
          }}
        />
        {/* ROI badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            padding: "5px 12px",
            borderRadius: "20px",
            fontSize: "0.72rem",
            fontWeight: 800,
            color: "#1c0f4c",
            background: "#6cdcff",
            boxShadow: "0 2px 10px rgba(108,220,255,0.4)",
          }}
        >
          hasta {p.roi}
        </div>
        {/* Name overlay on the image itself */}
        <div style={{ position: "absolute", left: 16, right: 16, bottom: 14 }}>
          <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: "1.05rem", margin: 0, lineHeight: 1.25, textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {p.name}
          </h3>
        </div>
      </div>

      {/* ── Card body ───────────────────────────────────── */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <p style={{ color: "rgba(15,10,46,0.55)", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>
          {p.description}
        </p>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
          {[
            { label: "Plazo típico", value: p.plazo },
            { label: "Inversión mín.", value: p.min },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                background: "#eef2f9",
                border: "1px solid #d2dcea",
                borderRadius: "10px",
                padding: "8px 10px",
              }}
            >
              <p style={{ color: "rgba(15,10,46,0.4)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                {s.label}
              </p>
              <p style={{ color: "#1c0f4c", fontWeight: 700, fontSize: "0.8rem", margin: "2px 0 0" }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#registro"
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px",
            borderRadius: "12px",
            fontSize: "0.8rem",
            fontWeight: 700,
            color: p.accent,
            background: `${p.accent}1f`,
            border: `1px solid ${p.accent}44`,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          Quiero invertir →
        </a>
      </div>
    </div>
  );
}

export default function ProyectosSection() {
  return (
    <section id="proyectos" className="py-14 md:py-24 px-4" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#1c0f4c" }}
          >
            Tipos de inversión
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4" style={{ color: "#1c0f4c" }}>
            En qué podrás{" "}
            <span className="gradient-text">invertir</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(15,10,46,0.5)" }}>
            Estas son las categorías de proyectos inmobiliarios que estarán disponibles en la plataforma, cada una con due diligence completo
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectTypes.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-xs" style={{ color: "rgba(15,10,46,0.3)" }}>
          *Rentabilidad y plazos son referenciales y pueden variar según el proyecto específico.
        </p>
      </div>
    </section>
  );
}
