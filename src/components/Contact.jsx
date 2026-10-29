import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
  };

  return (
    <section
      className="relative min-h-[80vh] w-full bg-white text-[#1a1a1d] px-[5%] md:px-[10%] py-16 md:py-24 overflow-hidden"
      id="contact"
    >
      {/* Subtle geometric structural line in the background */}
      {/* <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-[#fbc02d]/30 to-transparent pointer-events-none" /> */}

      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Left Side: Contact Information & Focus Description (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-xs md:text-[0.9rem] uppercase tracking-[4px] text-[#fbc02d] mb-4 font-bold">
              Connect With Us
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight tracking-tight mb-6 text-[#1a1a1d]">
              Let's engineer your{" "}
              <span className="text-[#fbc02d] bg-[#fbc02d]/10 px-1">
                next project.
              </span>
            </h2>
            <p className="text-sm md:text-[1rem] leading-relaxed text-zinc-600 font-light mb-10">
              Have a blueprint, corporate space, or architectural ambition? Get
              in touch with our engineering team to lay down the groundwork.
            </p>
          </div>

          {/* Structured Office Metadata Layout */}
          <div className="space-y-6 border-t border-zinc-200 pt-8 text-xs md:text-sm uppercase tracking-wider">
            <div>
              <p className="text-[#1a1a1d] font-bold mb-1 text-[0.7rem] md:text-xs tracking-widest">
                Head Office
              </p>
              <p className="text-zinc-500 font-light normal-case">
                Mabini Street Cotabato City
                <br />
                BARMM PHILPPINES
              </p>
            </div>
            <div>
              <p className="text-[#1a1a1d] font-bold mb-1 text-[0.7rem] md:text-xs tracking-widest">
                Inquiries
              </p>
              <p className="text-zinc-500 font-light normal-case">
                info@nordzbuilder.com
                <br />
                +63 1234 5678
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Architectural Minimalist Input Form (7 Cols) */}
        <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200 p-6 md:p-10 relative shadow-xs">
          {/* Subtle architectural corner grid detail */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fbc02d]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#fbc02d]" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  Phone or Email Address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                  placeholder="+63 123 4567 / john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
              >
                Project Type / Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                placeholder="Commercial Architecture / Residential"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
              >
                Project Scope & Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light resize-none placeholder-zinc-400"
                placeholder="Describe structural constraints, space requirements, timelines..."
              />
            </div>

            <button
              type="submit"
              className="w-full text-center py-4 text-[0.9rem] font-bold uppercase tracking-wider transition-all duration-300 bg-[#fbc02d] text-[#1a1a1d] border border-[#fbc02d] hover:bg-transparent hover:text-[#fbc02d]"
            >
              Initiate Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
