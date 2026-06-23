"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "¿Cómo funciona?", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Simulador", href: "#simulador" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(248,251,255,0.98)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "none",
        boxShadow: scrolled
          ? "0 2px 24px rgba(8,10,30,0.12), 0 1px 4px rgba(8,10,30,0.06)"
          : "0 1px 10px rgba(8,10,30,0.07)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/isotipo.png"
            alt="Platita.pe"
            width={140}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(15,10,46,0.60)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#1c0f4c")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(15,10,46,0.60)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#registro"
            className="btn-gradient px-5 py-2 rounded-full text-sm font-bold"
          >
            <span>Unirme a la lista</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className="block w-5 h-0.5 transition-transform duration-200"
            style={{ background: "#1c0f4c", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "" }}
          />
          <span
            className="block w-5 h-0.5 transition-opacity duration-200"
            style={{ background: "#1c0f4c", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-0.5 transition-transform duration-200"
            style={{ background: "#1c0f4c", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(248,251,255,0.99)", borderTop: "1px solid rgba(12,18,55,0.08)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "rgba(15,10,46,0.70)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registro"
            className="btn-gradient px-5 py-2.5 rounded-full text-sm font-bold text-center"
            onClick={() => setMenuOpen(false)}
          >
            <span>Unirme a la lista</span>
          </a>
        </div>
      )}
    </nav>
  );
}
