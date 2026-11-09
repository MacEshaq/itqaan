import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    userType: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Registration submitted:", formData);
  };

  return (
    <section
      className="relative min-h-[80vh] w-full bg-white text-[#1a1a1d] px-[5%] md:px-[10%] py-16 md:py-24 overflow-hidden"
      id="register"
    >
      <div className="relative w-full max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Left Side: Theme Branding & Focus Description (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-xs md:text-[0.9rem] uppercase tracking-[4px] text-[#fbc02d] mb-4 font-bold">
              Join Our Network
            </p>
            <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight tracking-tight mb-6 text-[#1a1a1d]">
              Establish your{" "}
              <span className="text-[#fbc02d] bg-[#fbc02d]/10 px-1">
                portal access.
              </span>
            </h2>
            <p className="text-sm md:text-[1rem] leading-relaxed text-zinc-600 font-light mb-10">
              Create a secure profile to manage your blueprints, follow project
              timelines, and safely collaborate directly with our engineering
              execution squads.
            </p>
          </div>

          {/* Structured Architectural Legal Layout */}
          <div className="space-y-6 border-t border-zinc-200 pt-8 text-xs md:text-sm uppercase tracking-wider">
            <div>
              <p className="text-[#1a1a1d] font-bold mb-1 text-[0.7rem] md:text-xs tracking-widest">
                Security Protocol
              </p>
              <p className="text-zinc-500 font-light normal-case">
                All data is encrypted under standard structural corporate
                firewalls.
              </p>
            </div>
            <div>
              <p className="text-[#1a1a1d] font-bold mb-1 text-[0.7rem] md:text-xs tracking-widest">
                Support
              </p>
              <p className="text-zinc-500 font-light normal-case">
                admin@nordzbuilder.com
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
                  htmlFor="username"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                  placeholder="engineer_john"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="userType"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  User Account Designation
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light cursor-pointer"
                >
                  <option value="user">User / Client</option>
                  <option value="admin">Admin / Engineer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  Secure Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light placeholder-zinc-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-center py-4 text-[0.9rem] font-bold uppercase tracking-wider transition-all duration-300 bg-[#fbc02d] text-[#1a1a1d] border border-[#fbc02d] hover:bg-transparent hover:text-[#fbc02d]"
            >
              Authorize Credentials
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
