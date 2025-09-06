import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const impactData = [
    { value: "item-1", title: "Education & Careers", content: "Our guide certification programs, English language lessons, and entrepreneurship training create lasting career paths."},
    { value: "item-2", title: "Health & Safety", content: "We provide essential mountain medicine, first aid, and mental health resources to keep our communities safe and resilient."},
    { value: "item-3", title: "Environmental Sustainability", content: "Through waste management systems and conservation projects, we are dedicated to preserving the pristine beauty of the Khumbu region."},
    { value: "item-4", title: "Cultural Preservation", content: "The Sherpa Heritage Center, traditional events, and knowledge transfer programs ensure Himalayan culture thrives for generations."},
];

const Impact = () => {
  return (
    <section id="services" className="bg-cream text-charcoal py-24 sm:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-base font-semibold tracking-wider text-alpenglow uppercase">Community Impact</h2>
          <p className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight">
            Empowering Every Facet of Himalayan Life
          </p>
        </div>
        
        <Accordion type="single" defaultValue="item-1" collapsible className="w-full max-w-4xl mx-auto">
          {impactData.map((item, index) => (
            <AccordionItem key={item.value} value={item.value} className="border-b border-slate-200">
              <AccordionTrigger className="text-xl md:text-2xl font-semibold hover:no-underline text-left py-6">
                <div className="flex items-center gap-4">
                  <span className="text-alpenglow">0{index + 1}</span>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-base text-slate max-w-2xl">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Impact;