"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const USERS = [
  { initials: "JL", name: "José L.",    city: "Lima",      gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)" },
  { initials: "CM", name: "Carlos M.",  city: "Arequipa",  gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)" },
  { initials: "LR", name: "Lucía R.",   city: "Trujillo",  gradient: "linear-gradient(135deg,#ec4899,#f97316)" },
  { initials: "AT", name: "Ana T.",     city: "Chiclayo",  gradient: "linear-gradient(135deg,#06b6d4,#8b5cf6)" },
  { initials: "MP", name: "Miguel P.",  city: "Cusco",     gradient: "linear-gradient(135deg,#8b5cf6,#22d3ee)" },
  { initials: "SR", name: "Sara R.",    city: "Piura",     gradient: "linear-gradient(135deg,#f97316,#ec4899)" },
  { initials: "DV", name: "Diego V.",   city: "Iquitos",   gradient: "linear-gradient(135deg,#22d3ee,#06b6d4)" },
  { initials: "MG", name: "María G.",   city: "Huancayo",  gradient: "linear-gradient(135deg,#a855f7,#ec4899)" },
  { initials: "RQ", name: "Roberto Q.", city: "Tacna",     gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)" },
  { initials: "KF", name: "Karen F.",   city: "Ica",       gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)" },
];

const ACTIONS = [
  "se unió a la lista de espera",
  "reservó su lugar",
  "quiere invertir desde S/10,000",
  "acaba de registrarse",
  "guardó su lugar prioritario",
];

interface ToastItem {
  id: number;
  user: typeof USERS[number];
  action: string;
  entering: boolean;
}

export default function ToastNotifications() {
  const [toast, setToast] = useState<ToastItem | null>(null);
  const indexRef = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const nextTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback(() => {
    const user   = USERS[indexRef.current % USERS.length];
    const action = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];
    indexRef.current++;

    const id = Date.now();

    // Mount with entering=true so CSS picks up the enter state
    setToast({ id, user, action, entering: true });

    // Trigger slide-out after 4.8 s
    hideTimer.current = setTimeout(() => {
      setToast((prev) => (prev?.id === id ? { ...prev, entering: false } : prev));
    }, 4800);

    // Remove from DOM after exit animation (0.5s)
    hideTimer.current = setTimeout(() => {
      setToast((prev) => (prev?.id === id ? null : prev));
    }, 5400);

    // Schedule next toast: random 18 – 38 s (natural, not spammy)
    const delay = 18000 + Math.random() * 20000;
    nextTimer.current = setTimeout(showToast, delay);
  }, []);

  useEffect(() => {
    // First toast appears after 6 s (let user read the page first)
    nextTimer.current = setTimeout(showToast, 6000);
    return () => {
      clearTimeout(hideTimer.current);
      clearTimeout(nextTimer.current);
    };
  }, [showToast]);

  if (!toast) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        left: "24px",
        zIndex: 40,
        pointerEvents: "none",
        /* Entry: spring-like bounce; Exit: soft fade + slide */
        transition: toast.entering
          ? "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease"
          : "transform 0.35s ease-in, opacity 0.35s ease-in",
        transform: toast.entering ? "translateY(0) scale(1)" : "translateY(16px) scale(0.94)",
        opacity: toast.entering ? 1 : 0,
      }}
    >
      <div
        style={{
          background: "rgba(18,11,48,0.96)",
          border: "1px solid rgba(139,92,246,0.35)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: "18px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          maxWidth: "260px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: toast.user.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: 700,
            color: "white",
            flexShrink: 0,
          }}
        >
          {toast.user.initials}
        </div>

        {/* Text */}
        <div style={{ minWidth: 0 }}>
          <p style={{ color: "white", fontSize: "13px", fontWeight: 600, lineHeight: 1.25, margin: 0 }}>
            {toast.user.name}{" "}
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 400 }}>
              · {toast.user.city}
            </span>
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", marginTop: "3px", lineHeight: 1.3 }}>
            {toast.action}
          </p>
        </div>

        {/* Live dot */}
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#22d3ee",
            flexShrink: 0,
            boxShadow: "0 0 6px rgba(34,211,238,0.8)",
            animation: "pulse-dot 2s infinite",
          }}
        />
      </div>
    </div>
  );
}
