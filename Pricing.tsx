import React, { useEffect, useRef, useState } from "react";

const pricingMatrix = {
  plans: ["Starter", "Pro", "Enterprise"],
  basePriceUSD: { Starter: 29, Pro: 79, Enterprise: 199 },
  annualMultiplier: 0.80,
  currencies: { USD: { symbol: "$", rate: 1 }, INR: { symbol: "₹", rate: 83.5 }, EUR: { symbol: "€", rate: 0.92 } }
};

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const sectionRef = useRef<HTMLElement>(null);

  // Pure DOM update function per requirements
  const updatePrices = (currentBilling: 'monthly'|'annual', currentCurrency: 'USD'|'INR'|'EUR') => {
    document.querySelectorAll('[data-price][data-plan]').forEach(el => {
      const plan = el.getAttribute('data-plan') as keyof typeof pricingMatrix.basePriceUSD;
      let price = pricingMatrix.basePriceUSD[plan];
      if (currentBilling === 'annual') price *= pricingMatrix.annualMultiplier;
      price *= pricingMatrix.currencies[currentCurrency].rate;
      el.textContent = pricingMatrix.currencies[currentCurrency].symbol + Math.round(price).toLocaleString();
    });
  };

  useEffect(() => {
    updatePrices(billing, currency);
  }, [billing, currency]);

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
    <section id="pricing" ref={sectionRef} className="py-24 bg-card/50 opacity-0 translate-y-10 transition-all duration-1000 ease-out border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-4">Predictable Power</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transparent pricing for teams that mean business. No hidden fees.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex bg-background border border-border p-1 rounded-lg">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${billing === 'monthly' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${billing === 'annual' ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Annual <span className="text-xs text-accent ml-1">-20%</span>
              </button>
            </div>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as any)}
              className="bg-background border border-border text-foreground text-sm rounded-lg focus:ring-primary focus:border-primary block px-4 py-3 outline-none"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-background border border-border rounded-xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-2">Starter</h3>
            <p className="text-muted-foreground mb-6">For small teams building their first data pipelines.</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold font-mono text-foreground" data-price data-plan="Starter"></span>
              <span className="text-muted-foreground ml-2">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Up to 5 pipelines</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Standard integrations</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> 48hr support response</li>
            </ul>
            <button className="w-full py-3 px-4 rounded border border-primary text-primary font-medium hover:bg-primary/10 transition-colors">Select Starter</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-card border-2 border-primary rounded-xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_10px_30px_rgba(255,200,1,0.15)] z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-background px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recommended
            </div>
            <h3 className="font-mono text-2xl font-bold text-primary mb-2">Pro</h3>
            <p className="text-muted-foreground mb-6">For scaling companies with advanced data needs.</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold font-mono text-foreground" data-price data-plan="Pro"></span>
              <span className="text-muted-foreground ml-2">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Unlimited pipelines</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> All 200+ integrations</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Predictive Analytics</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> 1hr priority support</li>
            </ul>
            <button className="w-full py-3 px-4 rounded bg-primary text-background font-bold hover:bg-accent transition-colors shadow-lg">Start Free Trial</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-background border border-border rounded-xl p-8 flex flex-col hover:border-primary/50 transition-colors duration-300">
            <h3 className="font-mono text-2xl font-bold text-foreground mb-2">Enterprise</h3>
            <p className="text-muted-foreground mb-6">Custom deployment and dedicated infrastructure.</p>
            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-bold font-mono text-foreground" data-price data-plan="Enterprise"></span>
              <span className="text-muted-foreground ml-2">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Custom VPC deployment</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> SOC2 & HIPAA Vault</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Dedicated success manager</li>
              <li className="flex items-center text-foreground/80"><span className="text-primary mr-2">✓</span> Custom SLAs</li>
            </ul>
            <button className="w-full py-3 px-4 rounded border border-border text-foreground font-medium hover:bg-card transition-colors">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
