// src/components/Testimonials.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "To increase the safety margin of Nepali climbers by encouraging responsible climbing practices in a supportive and community-based program.",
    author: "Khumbu Climbing Center",
    role: "Official Mission",
  },
  {
    quote: "The more Sherpas get training, the less dangerous the mountains become.",
    author: "Passang Tenzing",
    role: "KCC Instructor, 9x Everest Summiter",
  },
  {
    quote: "Unquestionably, it all goes back to Sir Ed. If you're lucky enough to be a climber, you should give something back.",
    author: "Conrad Anker",
    role: "Co-Founder, KCC",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-stone py-24 sm:py-32 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="text-center max-w-4xl mx-auto">
                  <p className="font-serif text-3xl md:text-4xl font-medium text-dawn-foreground">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-8">
                    <p className="font-bold text-lg text-dawn-foreground">{testimonial.author}</p>
                    <p className="text-stone-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex bg-dawn hover:bg-white text-dawn-foreground" />
          <CarouselNext className="hidden md:inline-flex bg-dawn hover:bg-white text-dawn-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;