import React from "react";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* CSS Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-1/3 right-1/4 w-[35vw] h-[35vw] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/3 w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Squebefi AI 2.0 is now live
        </div>

        <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
          Automate Everything.<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Understand Everything.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-200">
          The enterprise AI data automation platform built like a weapon. Construct neural pipelines, map complex schemas instantly, and stream real-time intelligence to your entire stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center animate-fade-in-up animation-delay-300">
          <a
            href="#pricing"
            className="group flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded font-bold text-lg hover:bg-accent hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,200,1,0.3)] hover:shadow-[0_0_30px_rgba(255,153,50,0.5)]"
          >
            Start Automating
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            className="group flex items-center justify-center gap-2 bg-transparent border-2 border-border text-foreground px-8 py-4 rounded font-bold text-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <Play size={20} className="group-hover:text-primary transition-colors" />
            Watch Demo
          </button>
        </div>

        <div className="mt-20 pt-10 border-t border-border/50 w-full max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Trusted by data-driven enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Minimalist text representations of logos to avoid external images breaking */}
            <span className="font-mono text-xl font-bold tracking-tighter">ACME_CORP</span>
            <span className="font-mono text-xl font-bold tracking-tighter">GLOBEX</span>
            <span className="font-mono text-xl font-bold tracking-tighter">SOYUZ</span>
            <span className="font-mono text-xl font-bold tracking-tighter">INITECH</span>
          </div>
        </div>
      </div>
    </section>
  );
}
