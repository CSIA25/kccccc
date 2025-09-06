// src/components/Hero.tsx
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <div
          className="border border-white/40 rounded-full px-5 py-2 text-xs uppercase tracking-wider backdrop-blur-sm hover:bg-white/10 transition animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Established 2003
        </div>
        <h1
          className="font-glamore text-5xl md:text-7xl lg:text-8xl font-bold mt-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          TOGETHER, <br />
          WE CLIMB <br />
          <span className="font-light italic">HIGHER</span>
        </h1>
      </div>
      {/* The scroll arrow has been removed from here and is now in its own component */}
    </section>
  );
};

export default Hero;