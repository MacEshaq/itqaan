import React, { useState } from "react";
import house1 from "../assets/images/house1.png";
import house2 from "../assets/images/house2.png";
import house3 from "../assets/images/house3.png";
import gov1 from "../assets/images/gov1.png";
import com1 from "../assets/images/com1.png";

// Mock dataset for architectural blueprint items
const PROJECTS_DATA = [
  {
    id: 1,
    title: "The House One",
    category: "Residential",
    year: "2025",
    location: "Cotabato City",
    image: house1,
    scale: "12,500 sq ft",
  },
  {
    id: 2,
    title: "The House 2",
    category: "Residential",
    year: "2026",
    location: "Davao City",
    image: house2,
    scale: "4,200 sq ft",
  },
  {
    id: 3,
    title: "The House 3",
    category: "Residential",
    year: "2024",
    location: "Cotabato City",
    image: house3,
    scale: "85,000 sq ft",
  },
  {
    id: 4,
    title: "DPWH Building",
    category: "Infrastructure",
    year: "2025",
    location: "Cagayan De Oro",
    image: gov1,
    scale: "150,000 sq ft",
  },
  {
    id: 5,
    title: "Commercial One",
    category: "Commercial",
    year: "2025",
    location: "Cotabato City",
    image: com1,
    scale: "70,000 sq ft",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Commercial", "Residential", "Infrastructure"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section
      className="relative min-h-screen w-full bg-[#1a1a1d] text-white px-[5%] md:px-[10%] py-10 md:py-24 overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-l from-[#1a1a1d] to-[#FBC02D]"></div>
      {/* Structural Accent Gridline */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-[#fbc02d]/10 to-transparent pointer-events-none" />

      {/* Header Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-12 md:mb-20">
        <p className="text-xs md:text-[0.9rem] uppercase tracking-[4px] text-[#fbc02d] mb-4 font-semibold">
          Projects
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-3xl md:text-[2.5rem] font-bold tracking-tight leading-tight max-w-lg">
            Spaces built with absolute{" "}
            <span className="text-[#fbc02d]">precision</span>.
          </h2>

          {/* Minimalist Filter Toggle System */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest border-b border-white/10 pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`transition-colors duration-300 font-semibold cursor-pointer ${
                  activeFilter === filter
                    ? "text-[#fbc02d]"
                    : "text-[#a0a0a5] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Minimal Gallery Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group flex flex-col w-full">
            {/* Image Box Container */}
            <div className="relative aspect-3/2 w-full overflow-hidden bg-[#222226] border border-white/5 mb-5">
              {/* Subtle structural corner indicators */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fbc02d]/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-0 md:filter md:grayscale md:hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
            </div>

            {/* Project Data Parameters */}
            <div className="flex justify-between items-start border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-[#fbc02d] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-[#a0a0a5] font-light uppercase tracking-wider mt-1">
                  {project.location} &middot; {project.category}
                </p>
              </div>

              {/* Engineering Specs Panel */}
              <div className="text-right text-[0.7rem] uppercase tracking-widest font-mono text-[#a0a0a5]/60">
                <p>
                  <span className="text-[#fbc02d]/80">Area:</span>{" "}
                  {project.scale}
                </p>
                <p>
                  <span className="text-[#fbc02d]/80">Year:</span>{" "}
                  {project.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
