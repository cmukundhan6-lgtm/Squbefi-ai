import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    quote: "Squebefi AI replaced a 12-person data engineering team. We now deploy complex ML pipelines in minutes instead of months. It feels almost illegal.",
    author: "Sarah Chen",
    role: "CTO, Globex Financial",
    initials: "SC",
    rating: 5
  },
  {
    quote: "The Auto-Schema Mapper is black magic. It took 400 disparate CSV formats and unified them perfectly without a single line of config.",
    author: "Marcus Vance",
    role: "VP Engineering, Initech",
    initials: "MV",
    rating: 5
  },
  {
    quote: "Finally, an AI tool that actually understands enterprise security. The custom VPC deployment and SOC2 compliance out of the box made procurement a breeze.",
    author: "Dr. Elena Rostova",
    role: "Head of Data, Soyuz Health",
    initials: "ER",
    rating: 5
  }
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      io.observe(sectionRef.current);
    }
    return () => io.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-background opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">Boardroom Approved</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the engineering leaders scaling with Squebefi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <article 
              key={idx} 
              className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,200,1,0.1)] group flex flex-col"
            >
              <div className="flex text-primary mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground/90 text-lg mb-8 flex-1 font-medium leading-relaxed group-hover:text-foreground transition-colors">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center font-mono font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-mono">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
