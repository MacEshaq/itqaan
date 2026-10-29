import React from "react";
import { HiX } from "react-icons/hi";

export default function Login({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
  };

  return (
    <div className="absolute top-full right-0 w-full md:w-96 bg-[#1A1A1D] border-t border-x md:border-b border-white/10 p-6 md:mr-6 shadow-2xl z-50">
      {/* Decorative corner accent line */}
      {/* <div className="absolute top-0 right-0 h-px w-1/2 bg-[#FBC02D]"></div> */}

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold tracking-wide text-[#FBC02D]">
          Sign In
        </h3>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-[#FBC02D] transition-colors"
          type="button"
        >
          <HiX className="text-xl" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full bg-black/40 border border-white/10 p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FBC02D] transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-black/40 border border-white/10 p-3 text-white placeholder-white/30 focus:outline-none focus:border-[#FBC02D] transition-colors"
            required
          />
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <label className="flex items-center gap-2 cursor-pointer text-white/60 hover:text-white">
            <input type="checkbox" className="accent-[#FBC02D]" />
            Remember me
          </label>
          <a href="#" className="text-[#FBC02D] hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FBC02D] text-black font-bold py-3 tracking-wider hover:bg-[#fbc02d]/90 transition-colors uppercase text-sm mt-2"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
