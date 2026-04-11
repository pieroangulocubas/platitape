"use client";
import { useState, useMemo } from "react";
import { peruData } from "@/lib/peru-data";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  departamento: string;
  provincia: string;
  distrito: string;
  fechaNacimiento: string;
}

const INITIAL: FormData = {
  nombre: "",
  correo: "",
  telefono: "",
  departamento: "",
  provincia: "",
  distrito: "",
  fechaNacimiento: "",
};

export default function FormSection() {
  const [form, setForm]       = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [error, setError]      = useState("");

  /* Derived selects */
  const provinces = useMemo(
    () => peruData.find((d) => d.name === form.departamento)?.provinces ?? [],
    [form.departamento]
  );

  const districts = useMemo(
    () => provinces.find((p) => p.name === form.provincia)?.districts ?? [],
    [provinces, form.provincia]
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => {
      if (name === "departamento") return { ...prev, departamento: value, provincia: "", distrito: "" };
      if (name === "provincia")    return { ...prev, provincia: value, distrito: "" };
      return { ...prev, [name]: value };
    });
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Basic validation
    const required: (keyof FormData)[] = ["nombre", "correo", "telefono", "departamento", "provincia", "distrito", "fechaNacimiento"];
    for (const key of required) {
      if (!form[key]) {
        setError("Por favor, completa todos los campos.");
        return;
      }
    }
    setLoading(true);
    // Simula envío (aquí conectas con tu API / CRM)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="registro" className="section-alt py-24 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div
            className="glass-card rounded-3xl p-12 flex flex-col items-center gap-6"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
              style={{ background: "linear-gradient(135deg,#22d3ee,#8b5cf6)" }}
            >
              🎉
            </div>
            <h2 className="text-3xl font-black text-white">
              ¡Ya estás en la lista!
            </h2>
            <p className="text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              Te notificaremos cuando Platita.pe esté disponible en tu zona.
              Mientras tanto, únete a nuestro canal de WhatsApp para estar al día.
            </p>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-8 py-4 rounded-full font-bold flex items-center gap-2"
            >
              <span>📲</span>
              <span>Unirme al canal</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="section-alt py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full"
            style={{
              background: "rgba(34,211,238,0.1)",
              border: "1px solid rgba(34,211,238,0.25)",
              color: "#22d3ee",
            }}
          >
            • Únete a la lista de espera
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-4">
            Reserva tu{" "}
            <span className="gradient-text">lugar gratis</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
            Sin compromiso. Te avisamos antes del lanzamiento y tendrás acceso prioritario.
          </p>
        </div>

        {/* Form */}
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

            {/* Row: nombre + correo */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez García"
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="juan@email.com"
                  className="form-input"
                />
              </div>
            </div>

            {/* Row: teléfono + fecha */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Teléfono / WhatsApp *
                </label>
                <div className="relative">
                  <span
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    🇵🇪 +51
                  </span>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="999 999 999"
                    className="form-input"
                    style={{ paddingLeft: "4.5rem" }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Fecha de nacimiento *
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={form.fechaNacimiento}
                  onChange={handleChange}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                    .toISOString()
                    .split("T")[0]}
                  className="form-input"
                  style={{ colorScheme: "dark" }}
                />
              </div>
            </div>

            {/* Departamento */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                Departamento *
              </label>
              <select
                name="departamento"
                value={form.departamento}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">— Selecciona tu departamento —</option>
                {peruData.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Provincia */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Provincia *
                </label>
                <select
                  name="provincia"
                  value={form.provincia}
                  onChange={handleChange}
                  disabled={!form.departamento}
                  className="form-input disabled:opacity-40"
                >
                  <option value="">— Selecciona provincia —</option>
                  {provinces.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Distrito */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Distrito *
                </label>
                <select
                  name="distrito"
                  value={form.distrito}
                  onChange={handleChange}
                  disabled={!form.provincia}
                  className="form-input disabled:opacity-40"
                >
                  <option value="">— Selecciona distrito —</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                className="text-sm px-4 py-3 rounded-xl"
                style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }}
              >
                ⚠️ {error}
              </p>
            )}

            {/* Urgency strip */}
            <div
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(236,72,153,0.08)",
                border: "1px solid rgba(236,72,153,0.2)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#ec4899", boxShadow: "0 0 8px #ec4899",
                  animation: "pulse-dot 1.5s infinite", flexShrink: 0,
                }}
              />
              <span>
                Solo quedan{" "}
                <strong style={{ color: "#ec4899" }}>47 lugares</strong>{" "}
                de acceso anticipado
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-gradient py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Reservar mi lugar gratis</span>
              )}
            </button>

            <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
              Sin compromiso · Gratis · Te avisamos antes del lanzamiento
            </p>
          </form>
        </div>

        {/* WhatsApp channel CTA */}
        <div
          className="mt-6 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4"
          style={{
            background: "rgba(37,211,102,0.07)",
            border: "1px solid rgba(37,211,102,0.2)",
          }}
        >
          <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.15)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white font-semibold text-sm">Únete a nuestro canal de WhatsApp</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Recibe actualizaciones exclusivas, tips de inversión y el aviso de lanzamiento antes que nadie
            </p>
          </div>
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all"
            style={{
              background: "#25D366",
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              textDecoration: "none",
            }}
          >
            Unirme al canal
          </a>
        </div>
      </div>
    </section>
  );
}
