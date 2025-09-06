import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const involvementOptions = [
  {
    title: "Support as an Individual",
    description: "Your contribution directly funds training, equipment, and vital community programs.",
    cta: "Make a Donation"
  },
  {
    title: "Partner as a Company",
    description: "Align your brand with our mission through equipment sponsorships and CSR initiatives.",
    cta: "Corporate Partnerships"
  },
  {
    title: "Join an Expedition",
    description: "Participate in our guided climbs and skills workshops led by international experts.",
    cta: "View Training Programs"
  }
];

const GetInvolved = () => {
  return (
    <section id="contact" className="bg-cream text-charcoal py-24 sm:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Primary Call to Action */}
          <div className="animate-fade-in-up">
            <h2 className="text-base font-semibold tracking-wider text-alpenglow uppercase">Get Involved</h2>
            <p className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight">
              Be Part of the Legacy.
            </p>
            <p className="mt-6 text-lg text-slate">
              The future of the Khumbu Climbing Center and the communities we serve depends on the generosity and partnership of people like you. Join us in our mission to empower Nepal's mountain workers.
            </p>
          </div>
          
          {/* Right Column: Actionable Steps */}
          <div className="space-y-8">
            {involvementOptions.map((option) => (
              <div key={option.title} className="p-6 border border-slate-200 rounded-lg">
                <h3 className="font-semibold text-lg">{option.title}</h3>
                <p className="mt-2 text-slate text-sm">{option.description}</p>
                <Button variant="link" className="p-0 mt-4 text-alpenglow hover:text-alpenglow/80">
                  {option.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInvolved;