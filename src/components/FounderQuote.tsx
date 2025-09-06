import conradFg from "@/assets/conrad-fg.jpg";

const FounderQuote = () => {
  return (
    <section className="bg-cream text-charcoal py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div>
            <img 
              src={conradFg} 
              alt="Portrait of Conrad Anker" 
              className="rounded-lg object-cover shadow-2xl w-full h-auto"
            />
          </div>

          {/* Right: Quote */}
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
              "Climbers who not only know what they are doing, but <span className="text-alpenglow">enjoy doing it</span>, are more engaged—and that makes them safer in the mountains."
            </h2>
            <p className="mt-6 text-lg font-semibold text-slate">
              — Conrad Anker, Co-Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;