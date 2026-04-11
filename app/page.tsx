import Navbar                from "@/components/Navbar";
import HeroSection            from "@/components/HeroSection";
import StatsSection           from "@/components/StatsSection";
import { RespaldoLegalBand, SociosEstrategicosBand } from "@/components/LegalTicker";
import HowItWorksSection      from "@/components/HowItWorksSection";
import ComparativoSection     from "@/components/ComparativoSection";
import BenefitsSection        from "@/components/BenefitsSection";
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <RespaldoLegalBand />
        <HowItWorksSection />
        <ComparativoSection />
        <BenefitsSection />
        <ProyectosSection />
        <TarjetasBanner />
        <SociosEstrategicosBand />
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
