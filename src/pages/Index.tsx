// src/pages/Index.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MemorySection from "@/components/MemorySection";
import TripSelection from "@/components/TripSelection";
import FounderSection from "@/components/FounderSection";
import ContactSection from "@/components/ContactSection"; // 1. IMPORT
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-cream">
      <Navigation />
      <main>
        <Hero />
        <MemorySection />
        <TripSelection />
        <FounderSection />
        <ContactSection /> {/* 2. ADD THE NEW SECTION */}
      </main>
      <Footer /> {/* Footer is now empty */}
    </div>
  );
};

export default Index;