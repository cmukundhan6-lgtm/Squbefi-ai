import React, { useEffect, useRef, useState } from "react";
import { Network, Database, BrainCircuit, Columns, ShieldCheck, Zap, ChevronDown } from "lucide-react";

const features = [
  {
    icon: <Network className="text-primary w-8 h-8" />,
    title: "Neural Pipeline Builder",
    description: "Drag-and-drop AI workflow construction. Build complex ETL processes without writing a single line of code.",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    icon: <Database className="text-accent w-8 h-8" />,
    title: "Real-time Data Mesh",
    description: "Streaming data connections across 200+ sources including Postgres, Snowflake, and Salesforce.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <BrainCircuit className="text-primary w-8 h-8" />,
    title: "Predictive Analytics Engine",
    description: "ML-powered forecasting with 94% accuracy. Let the models find the anomalies before they happen.",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    icon: <Columns className="text-accent w-8 h-8" />,
    title: "Auto-Schema Mapper",
    description: "Intelligent field mapping with zero configuration. AI automatically aligns disparate schemas in seconds.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <ShieldCheck className="text-primary w-8 h-8" />,
    title: "Enterprise Security Vault",
    description: "Bank-grade protection. SOC2 Type II, GDPR, and HIPAA compliant infrastructure by default.",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    icon: <Zap className="text-accent w-8 h-8" />,
    title: "One-Click Deploy",
    description: "Push complex pipelines to production in under 60 seconds with automated rollbacks and version control.",
    span: "md:col-span-2 md:row-span-1"
  }
];

export function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (entries.length > 0) {
        const width = entries[0].contentRect.width;
        const nowMobile = width < 768;
        if (nowMobile !== isMobile) {
          setIsMobile(nowMobile);
        }
      }
    });
    observer.observe(document.body);
    
    // Intersection observer for section entrance
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

    return () => {
      observer.disconnect();
      io.disconnect();
    };
  }, [isMobile]);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-background opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">Unfair Advantage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your data layer. Built for scale, designed for speed.
          </p>
        </div>

        {isMobile ? (
          /* Mobile Accordion */
          <div className="flex flex-col space-y-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`border rounded-lg overflow-hidden transition-all duration-300 ${activeIdx === idx ? 'border-primary bg-card/50 shadow-[0_0_15px_rgba(255,200,1,0.1)]' : 'border-border bg-card'}`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveIdx(idx === activeIdx ? -1 : idx)}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <span className={`font-bold text-lg text-left ${activeIdx === idx ? 'text-primary' : 'text-foreground'}`}>{feature.title}</span>
                  </div>
                  <ChevronDown className={`transition-transform duration-300 ${activeIdx === idx ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${activeIdx === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-muted-foreground pl-12">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop Bento Grid */
          <div className="grid grid-cols-3 gap-6 auto-rows-[200px]">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl border p-8 cursor-pointer overflow-hidden transition-all duration-300 group
                  ${feature.span} 
                  ${activeIdx === idx 
                    ? 'border-primary bg-card shadow-[0_0_20px_rgba(255,200,1,0.15)] scale-[1.02] z-10' 
                    : 'border-border bg-card/80 hover:border-accent/50 hover:bg-card hover:scale-[1.01]'
                  }
                `}
                onClick={() => setActiveIdx(idx)}
              >
                <div className={`absolute top-0 left-0 w-1 h-full transition-all duration-300 ${activeIdx === idx ? 'bg-primary' : 'bg-transparent group-hover:bg-accent/50'}`} />
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className={`font-mono text-xl font-bold mb-2 transition-colors ${activeIdx === idx ? 'text-primary' : 'text-foreground'}`}>
                    {feature.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIdx === idx ? 'opacity-100 max-h-32' : 'opacity-70 max-h-20'}`}>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
