"use client";
import Image from "next/image";
import { useState } from "react";

const team = [
  {
    photo: "/hedut.png",
    initials: "HF",
    name: "Hedut Fernández",
    role: "CEO & Co-fundador",
    bio: "Emprendedor con trayectoria en fintech y mercado inmobiliario peruano. Apasionado por democratizar el acceso a inversiones de alto impacto.",
    gradient: "linear-gradient(135deg,#6cdcff,#bc45e9)",
    tags: ["Fintech", "Real Estate", "Comunicaciones"],
    linkedin: "https://www.linkedin.com/in/hedut-fernandez/",
  },
  {
    photo: "/william.png",
    initials: "WB",
    name: "William Bernal",
    role: "COO & Co-fundador",
    bio: "Inversionista con trayectoria en mercado inmobiliario y gestor de proyectos de alto impacto. Asegura que cada sol invertido tenga el mayor retorno posible.",
    gradient: "linear-gradient(135deg,#bc45e9,#6cdcff)",
    tags: ["Inversiones", "Real Estate", "Gestión"],
    linkedin: null,
  },
];

function CaptadorForm() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/captador", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.75rem",
    border: "1.5px solid #d2dcea",
    background: "#eef2f9",
    color: "#1c0f4c",
    fontSize: "0.9rem",
    fontWeight: 500,
    outline: "none",
    transition: "border-color 0.2s",
  };

  if (status === "ok") {
    return (
      <div className="text-center py-4">
        <p className="font-bold" style={{ color: "#bc45e9" }}>¡Gracias! Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input
          required
          placeholder="Nombre completo"
          value={form.nombre}
          onChange={set("nombre")}
          style={inputStyle}
        />
        <input
          required
          type="email"
          placeholder="Correo electrónico"
          value={form.correo}
          onChange={set("correo")}
          style={inputStyle}
        />
      </div>
      <textarea
        placeholder="Cuéntanos brevemente tu experiencia captando capital (opcional)"
        value={form.mensaje}
        onChange={set("mensaje")}
        rows={2}
        style={{ ...inputStyle, resize: "none" }}
      />
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-gradient px-7 py-3 rounded-full text-sm font-bold"
          style={{ opacity: status === "sending" ? 0.7 : 1 }}
        >
          <span>{status === "sending" ? "Enviando…" : "Postular como captador →"}</span>
        </button>
        {status === "error" && (
          <p className="text-sm" style={{ color: "#f87171" }}>
            Algo salió mal. Intenta nuevamente.
          </p>
        )}
      </div>
    </form>
  );
}

export default function EquipoSection() {
  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f7f2ff 45%, #ffffff 100%)",
      }}
    >
      {/* Glow decorativo suave */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(188,69,233,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "80px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(108,220,255,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#1c0f4c" }}
          >
            Co-fundadores
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-5 mb-4" style={{ color: "#1c0f4c" }}>
            Las personas detrás de{" "}
            <span className="gradient-text">Platita.pe</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(15,10,46,0.50)" }}>
            Dos peruanos que decidieron que invertir en bienes raíces debía ser posible para todos
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map((member, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              style={{
                background: "#ffffff",
                border: "1px solid #d2dcea",
                boxShadow: "0 4px 24px rgba(28,15,76,0.08)",
              }}
            >
              {/* Photo */}
              <div className="relative" style={{ height: "320px" }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Gradient overlay */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, transparent 30%, rgba(15,10,46,0.92) 100%)",
                  }}
                />
                {/* Name + role on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                  <span
                    className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-2"
                    style={{ background: member.gradient, color: "white" }}
                  >
                    {member.role}
                  </span>
                  <p className="text-2xl font-black text-white leading-tight">{member.name}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4 flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: "rgba(15,10,46,0.55)" }}>
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(28,15,76,0.06)",
                        border: "1px solid rgba(28,15,76,0.10)",
                        color: "rgba(15,10,46,0.50)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold transition-opacity w-fit"
                    style={{ color: "#1c0f4c", textDecoration: "none", opacity: 0.75 }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    Ver perfil en LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Captadores de capital */}
        <div
          className="mt-14 rounded-3xl p-8"
          style={{
            background: "#ffffff",
            border: "1px solid rgba(188,69,233,0.20)",
            boxShadow: "0 2px 16px rgba(188,69,233,0.06)",
          }}
        >
          <div className="mb-5">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "rgba(188,69,233,0.10)",
                border: "1px solid rgba(188,69,233,0.25)",
                color: "#bc45e9",
              }}
            >
              Únete al equipo
            </span>
            <h3 className="text-xl font-black mt-3 mb-1" style={{ color: "#1c0f4c" }}>
              ¿Eres captador de capital?
            </h3>
            <p className="text-sm" style={{ color: "rgba(15,10,46,0.50)" }}>
              Somos un equipo en crecimiento. Si conectas inversores con oportunidades de alto retorno, escríbenos — trabajemos juntos.
            </p>
          </div>
          <CaptadorForm />
        </div>

      </div>
    </section>
  );
}
