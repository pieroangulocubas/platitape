"use client";
import { useState, useMemo } from "react";
import { peruData } from "@/lib/peru-data";
import { WA_CONTACT_URL, WA_CHANNEL_URL, FORMSPREE_ENDPOINT } from "@/lib/config";

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

// Light input style
const lightInput: React.CSSProperties = {
  background: "#ffffff",
  border: "1.5px solid #e0ddf2",
  color: "#0f0a2e",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  width: "100%",
  fontSize: "0.95rem",
  fontWeight: 500,
  transition: "border-color 0.2s, box-shadow 0.2s",
  outline: "none",
};

const lightInputFocus: React.CSSProperties = {
  borderColor: "#bc45e9",
  boxShadow: "0 0 0 3px rgba(188,69,233,0.10)",
};

function LightInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{ ...lightInput, ...(focused ? lightInputFocus : {}), ...props.style }}
      onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

function LightSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      style={{ ...lightInput, ...(focused ? lightInputFocus : {}), appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231c0f4c' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", paddingRight: "2.5rem" }}
      onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
    />
  );
}

export default function FormSection() {
  const [form, setForm]           = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

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
    const required: (keyof FormData)[] = ["nombre","correo","telefono","departamento","provincia","distrito","fechaNacimiento"];
    for (const key of required) {
      if (!form[key]) { setError("Por favor, completa todos los campos."); return; }
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          correo: form.correo,
          telefono: `+51 ${form.telefono}`,
          ubicacion: `${form.distrito}, ${form.provincia}, ${form.departamento}`,
          fechaNacimiento: form.fechaNacimiento,
          _subject: `Nuevo registro lista de espera: ${form.nombre}`,
        }),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError("Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <section id="registro" className="py-20 px-4" style={{ background: "#eef2f9" }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="rounded-3xl p-12 flex flex-col items-center gap-6"
            style={{ background: "#ffffff", border: "1.5px solid #e0ddf2", boxShadow: "0 8px 40px rgba(28,15,76,0.08)" }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
              style={{ background: "linear-gradient(135deg,#22d3ee,#8b5cf6)" }}>
              🎉
            </div>
            <h2 className="text-3xl font-black" style={{ color: "#0f0a2e" }}>
              ¡Ya estás en la lista!
            </h2>
            <p className="text-lg" style={{ color: "rgba(15,10,46,0.58)" }}>
              Te notificaremos cuando Platita.pe esté disponible en tu zona.
              Mientras tanto, únete a nuestro canal de WhatsApp para estar al día.
            </p>
            <a href={WA_CONTACT_URL} target="_blank" rel="noopener noreferrer"
              className="btn-gradient px-8 py-4 rounded-full font-bold flex items-center gap-2">
              <span>📲</span>
              <span>Unirme al canal</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro" className="py-20 px-4 relative overflow-hidden" style={{ background: "#eef2f9" }}>
      {/* Decorative blobs */}
      <div className="absolute pointer-events-none" style={{ right: "-5%", top: "-10%", width: "40%", height: "60%", background: "radial-gradient(ellipse, rgba(188,69,233,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "-5%", bottom: "-5%", width: "35%", height: "50%", background: "radial-gradient(ellipse, rgba(108,220,255,0.07) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-md inline-block"
            style={{ background: "rgba(12,18,55,0.06)", border: "1px solid rgba(12,18,55,0.12)", color: "#1c0f4c" }}>
            • Únete a la lista de espera
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-3" style={{ color: "#080b1e" }}>
            Reserva tu{" "}
            <span className="gradient-text">lugar gratis</span>
          </h2>
          <p className="text-base" style={{ color: "rgba(8,11,30,0.52)" }}>
            Sin compromiso. Te avisamos antes del lanzamiento y tendrás acceso prioritario.
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-xl p-8 md:p-10" style={{ background: "#ffffff", border: "1px solid #d2dcea", boxShadow: "0 2px 8px rgba(8,10,30,0.05), 0 12px 40px rgba(8,10,30,0.07)" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Nombre completo *</label>
                <LightInput type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan Pérez García" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Correo electrónico *</label>
                <LightInput type="email" name="correo" value={form.correo} onChange={handleChange} placeholder="juan@email.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Teléfono / WhatsApp *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-semibold" style={{ color: "rgba(15,10,46,0.40)" }}>🇵🇪 +51</span>
                  <LightInput type="tel" name="telefono" value={form.telefono} onChange={handleChange} placeholder="999 999 999" style={{ paddingLeft: "4.5rem" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Fecha de nacimiento *</label>
                <LightInput
                  type="date" name="fechaNacimiento" value={form.fechaNacimiento} onChange={handleChange}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
                  style={{ colorScheme: "light" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Departamento *</label>
              <LightSelect name="departamento" value={form.departamento} onChange={handleChange}>
                <option value="">— Selecciona tu departamento —</option>
                {peruData.map((d) => <option key={d.name} value={d.name}>{d.name}</option>)}
              </LightSelect>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Provincia *</label>
                <LightSelect name="provincia" value={form.provincia} onChange={handleChange} disabled={!form.departamento} style={{ opacity: !form.departamento ? 0.45 : 1 }}>
                  <option value="">— Selecciona provincia —</option>
                  {provinces.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                </LightSelect>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wide" style={{ color: "rgba(15,10,46,0.50)" }}>Distrito *</label>
                <LightSelect name="distrito" value={form.distrito} onChange={handleChange} disabled={!form.provincia} style={{ opacity: !form.provincia ? 0.45 : 1 }}>
                  <option value="">— Selecciona distrito —</option>
                  {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                </LightSelect>
              </div>
            </div>

            {error && (
              <p className="text-sm px-4 py-3 rounded-xl" style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.25)", color: "#dc2626" }}>
                ⚠️ {error}
              </p>
            )}

            <button
              type="submit" disabled={loading}
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

            <p className="text-xs text-center" style={{ color: "rgba(15,10,46,0.35)" }}>
              Sin compromiso · Gratis · Te avisamos antes del lanzamiento
            </p>
          </form>
        </div>

        {/* WA channel CTA */}
        <div className="mt-6 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4"
          style={{ background: "rgba(37,211,102,0.06)", border: "1.5px solid rgba(37,211,102,0.20)" }}>
          <div className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: "rgba(37,211,102,0.12)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="font-semibold text-sm" style={{ color: "#0f0a2e" }}>Únete a nuestro canal de WhatsApp</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(15,10,46,0.48)" }}>
              Recibe actualizaciones exclusivas, tips de inversión y el aviso de lanzamiento antes que nadie
            </p>
          </div>
          <a href={WA_CONTACT_URL} target="_blank" rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.3)", textDecoration: "none" }}>
            Unirme al canal
          </a>
        </div>
      </div>
    </section>
  );
}
