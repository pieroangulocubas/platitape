const IconPercent = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);
const IconCoins = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
  </svg>
);
const IconUsers = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconShield = ({ c }: { c: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const stats = [
  { value: "22%",   label: "Rentabilidad anual",  icon: <IconPercent c="#22d3ee" />, accent: "#22d3ee" },
  { value: "S/500", label: "Inversión mínima",     icon: <IconCoins   c="#a78bfa" />, accent: "#a78bfa" },
  { value: "+500",  label: "En lista de espera",   icon: <IconUsers   c="#22d3ee" />, accent: "#22d3ee" },
  { value: "100%",  label: "Proceso online",       icon: <IconShield  c="#a78bfa" />, accent: "#a78bfa" },
];

export default function StatsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 text-center group hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-2"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${stat.accent === "#22d3ee" ? "34,211,238" : "139,92,246"},0.1)`,
                  border: `1px solid rgba(${stat.accent === "#22d3ee" ? "34,211,238" : "139,92,246"},0.2)`,
                }}
              >
                {stat.icon}
              </div>
              <div
                className="text-3xl md:text-4xl font-black"
                style={{ color: stat.accent }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
