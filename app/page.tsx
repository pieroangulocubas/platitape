import Navbar                from "@/components/Navbar";
import HeroSection            from "@/components/HeroSection";
import VSLSection             from "@/components/VSLSection";
import StatsSection           from "@/components/StatsSection";
import { RespaldoLegalBand, SociosEstrategicosBand } from "@/components/LegalTicker";
import HowItWorksSection      from "@/components/HowItWorksSection";
import ComparativoSection     from "@/components/ComparativoSection";
import BenefitsSection        from "@/components/BenefitsSection";
import SecuritySection        from "@/components/SecuritySection";
import ProyectosSection       from "@/components/ProyectosSection";
import TarjetasBanner         from "@/components/TarjetasBanner";
import AppPreviewSection      from "@/components/AppPreviewSection";
import SimuladorSection       from "@/components/SimuladorSection";
import EquipoSection          from "@/components/EquipoSection";
import TestimonialsSection    from "@/components/TestimonialsSection";
import FAQSection             from "@/components/FAQSection";
import FormSection            from "@/components/FormSection";
import Footer                 from "@/components/Footer";
import WhatsAppButton         from "@/components/WhatsAppButton";
import StickyMobileCTA        from "@/components/StickyMobileCTA";

/** Smooth gradient transition between two section background colors */
function Wave({ from, to }: { from: string; to: string; flip?: boolean }) {
  return (
    <div
      style={{
        height: "56px",
        background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
        margin: "-1px 0",
        pointerEvents: "none",
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Wave from="#ffffff" to="#eef2f9" />
        <VSLSection />
        <Wave from="#eef2f9" to="#ffffff" flip />
        <StatsSection />
        <RespaldoLegalBand />
        <HowItWorksSection />
        <ComparativoSection />
        <BenefitsSection />
        <Wave from="#eef2f9" to="#ffffff" />
        <SecuritySection />
        <ProyectosSection />
        <SociosEstrategicosBand />
        <TarjetasBanner />
        <AppPreviewSection />
        <SimuladorSection />
        <EquipoSection />
        <TestimonialsSection />
        <FAQSection />
        <FormSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
