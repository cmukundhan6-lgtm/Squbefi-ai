import React, { useEffect, useRef } from "react";

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    const elements = document.querySelectorAll("[data-target]");
    elements.forEach((el) => {
      const target = parseFloat(el.getAttribute("data-target") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const isFloat = el.getAttribute("data-float") === "true";
      
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16); // 60fps
      
      const updateCounter = () => {
        start += increment;
        if (start < target) {
          el.textContent = `${prefix}${isFloat ? start.toFixed(1) : Math.floor(start)}${suffix}`;
          requestAnimationFrame(updateCounter);
        } else {
          el.textContent = `${prefix}${isFloat ? target.toFixed(1) : target}${suffix}`;
        }
      };
      
      updateCounter();
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-card border-y border-border opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="py-4 md:py-0 px-4">
            <p className="text-4xl md:text-5xl font-mono font-bold text-primary mb-2" data-target="2.4" data-suffix="M+" data-float="true">0</p>
            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Data Pipelines Automated</p>
          </div>
          <div className="py-4 md:py-0 px-4">
            <p className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-2" data-target="99.7" data-suffix="%" data-float="true">0</p>
            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Uptime SLA</p>
          </div>
          <div className="py-4 md:py-0 px-4">
            <p className="text-4xl md:text-5xl font-mono font-bold text-accent mb-2" data-target="10" data-suffix="x">0</p>
            <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">Faster Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
