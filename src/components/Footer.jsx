// import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1a1a1d] text-white border-t border-white/5 px-[5%] md:px-[10%] py-8 md:py-16 overflow-hidden">
      {/* Subtle geometric structural line matching the hero section */}
      {/* <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-[#fbc02d]/10 to-transparent pointer-events-none" /> */}

      <div className="relative w-full max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
        {/* Left Side: Brand & Concept */}
        <div className="max-w-xs">
          <span className="text-sm font-bold uppercase tracking-[3px] text-[#fbc02d]">
            Itqaan<span className=" text-white">Construction</span>
          </span>
          <p className="text-xs text-[#a0a0a5] font-light mt-2 leading-relaxed">
            “My Lord, cause me to land at a blessed landing place, and You are
            the best to accommodate [us].” -Quran (23:29)
          </p>
        </div>

        {/* Right Side: Social Icons using Native SVGs */}
        <div className="w-full flex justify-around items-center">
          <a
            href="#hero"
            className="text-[#a0a0a5] hover:text-[#fbc02d] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[#a0a0a5] hover:text-[#fbc02d] transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-[#a0a0a5] hover:text-[#fbc02d] transition-colors duration-300"
          >
            Contact
          </a>
          {/* <a
            href="#hero"
            className="text-[#a0a0a5] hover:text-[#fbc02d] transition-colors duration-300"
          >
            Login
          </a> */}

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 text-[#a0a0a5] hover:text-[#fbc02d] hover:border-[#fbc02d] transition-all duration-300"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 border border-white/10 text-[#a0a0a5] hover:text-[#fbc02d] hover:border-[#fbc02d] transition-all duration-300"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="relative w-full max-w-7xl mx-auto z-10 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[0.7rem] text-[#a0a0a5]/60 uppercase tracking-widest font-light">
        <p>&copy; {currentYear} itqaan. All rights reserved.</p>
        <p className="normal-case">Designed with precision.</p>
      </div>
    </footer>
  );
}
