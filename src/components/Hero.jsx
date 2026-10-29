import React from "react";

export default function ConstructionHero() {
  return (
    <section
      className="relative h-[70vh] w-full bg-[#1a1a1d] text-white flex items-center pt-2 md:pt-16 px-[5%] md:px-[10%] overflow-hidden"
      id="hero"
    >
      {/* Subtle geometric structural line in the background */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-[#fbc02d]/20 to-transparent pointer-events-none" />

      {/* Hero Content Area */}
      <div className="w-full max-w-162.5 z-10">
        {/* Accent Tagline */}
        <p className="text-xs md:text-[0.9rem] uppercase tracking-[4px] text-[#fbc02d] mb-4 md:mb-6 font-semibold">
          Engineering Excellence
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-[3.5rem] font-bold leading-tight md:leading-[1.15] tracking-tight mb-4 md:mb-6">
          We build spaces that{" "}
          <span className="text-[#fbc02d]">define eras</span>.
        </h1>

        {/* Short Description */}
        <p className="text-sm md:text-[1.1rem] leading-relaxed md:leading-[1.6] text-[#a0a0a5] font-light mb-8 md:mb-10">
          Minimal architecture. Uncompromising structural integrity.
          Transforming complex blueprints into striking, sustainable physical
          realities.
        </p>

        {/* Button Layout Grid */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
          <a
            href="#projects"
            className="inline-block text-center w-full md:w-auto px-8 py-4 text-[0.95rem] font-semibold uppercase tracking-wider transition-all duration-300 bg-[#fbc02d] text-[#1a1a1d] border-2 border-[#fbc02d] hover:bg-transparent hover:text-[#fbc02d]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block text-center w-full md:w-auto px-8 py-4 text-[0.95rem] font-semibold uppercase tracking-wider transition-all duration-300 bg-transparent text-white border-2 border-white/20 hover:border-[#fbc02d] hover:text-[#fbc02d]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
