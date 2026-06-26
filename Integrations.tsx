import React, { useEffect, useRef } from "react";

const integrations = [
  { name: "Salesforce", color: "hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/10" },
  { name: "PostgreSQL", color: "hover:border-indigo-500 hover:text-indigo-500 hover:bg-indigo-500/10" },
  { name: "Snowflake", color: "hover:border-sky-400 hover:text-sky-400 hover:bg-sky-400/10" },
  { name: "Apache Kafka", color: "hover:border-neutral-900 hover:text-foreground hover:bg-neutral-800" },
  { name: "AWS S3", color: "hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10" },
  { name: "Google BigQuery", color: "hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10" },
];

export function Integrations() {
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
    <section ref={sectionRef} className="py-20 bg-card border-y border-border opacity-0 translate-y-10 transition-all duration-1000 ease-out overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-mono text-2xl font-bold text-foreground">Integrates with your entire stack</h2>
          <p className="text-muted-foreground mt-2">Zero-config connections to over 200+ enterprise data sources.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {integrations.map((integration, idx) => (
            <div 
              key={idx}
              className={`px-6 py-3 rounded-full border border-border bg-background text-muted-foreground font-mono font-medium text-sm transition-all duration-300 cursor-default ${integration.color}`}
            >
              {integration.name}
            </div>
          ))}
          <div className="px-6 py-3 rounded-full border border-dashed border-primary/50 text-primary font-mono font-medium text-sm bg-primary/5">
            + 194 more
          </div>
        </div>
      </div>
    </section>
  );
}
