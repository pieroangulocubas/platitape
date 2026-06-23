import AppPreviewSection from "@/components/AppPreviewSection";
import ComparativoSection from "@/components/ComparativoSection";
import EquipoSection from "@/components/EquipoSection";
import Footer from "@/components/Footer";
import FormSection from "@/components/FormSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { RespaldoLegalBand, SociosEstrategicosBand } from "@/components/LegalTicker";
import Navbar from "@/components/Navbar";
import ProyectosSection from "@/components/ProyectosSection";
import SimuladorSection from "@/components/SimuladorSection";
import StatsSection from "@/components/StatsSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        <StatsSection />
        <RespaldoLegalBand />
        <Wave from="#ffffff" to="#eef2f9" />
        <HowItWorksSection />
        <FormSection />
        <Wave from="#eef2f9" to="#ffffff" />
        <ComparativoSection />
        <Wave from="#ffffff" to="#eef2f9" />
        <ProyectosSection />
        <SociosEstrategicosBand />
        <AppPreviewSection />
        <SimuladorSection />
        <EquipoSection />
        <TestimonialsSection />
        {/* <FAQSection /> */}
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
    </>
  );
}
