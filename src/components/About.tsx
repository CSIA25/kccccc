import kccGroupPhoto from "@/assets/kcc-group-photo.jpeg";

const stats = [
  { value: "2003", label: "Founded in Phortse" },
  { value: "700+", label: "Students Trained" },
  { value: "100%", label: "Community-Based" },
];

const About = () => {
  return (
    <section id="about" className="bg-cream text-charcoal py-24 sm:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Text */}
          <div className="animate-fade-in-up">
            <h2 className="text-base font-semibold tracking-wider text-alpenglow uppercase">Our Mission</h2>
            <p className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight">
              To sustain and enhance the KCC, creating opportunities for Nepali mountain workers.
            </p>
            <p className="mt-6 text-lg text-slate">
              We focus on developing skills, improving safety standards, and building sustainable livelihoods for the entire Himalayan community.
            </p>
            <dl className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-5xl font-bold tracking-tight">{stat.value}</dt>
                  <dd className="text-sm text-slate mt-1">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Right: Image */}
          <div className="w-full h-[600px] bg-stone-200 rounded-lg overflow-hidden">
            <img
              src={kccGroupPhoto}
              alt="Khumbu Climbing Center students and instructors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;