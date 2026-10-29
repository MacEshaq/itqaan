import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";
import { RiAdminFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";
import Login from "./Login"; // Imported separate login component

import logo from "../assets/images/logo.png";

export default function Navbar({ prop_x }) {
  const [isOpen, setIsOpen] = useState(false); //nav links state
  const [showLogin, setShowLogin] = useState(false); //login state

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
    setIsOpen(false); //closing the nav links
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1A1A1D] text-white px-6 py-2 shadow-lg backdrop-blur-md">
      {/* Decorative Bottom Border Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-l from-[#FBC02D] to-[#1A1A1D]"></div>

      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {/* <h1 className="text-3xl font-bold tracking-wider text-[#FBC02D]">
            Nordz
          </h1> */}

          <img
            src={logo}
            alt="company logo"
            className="shrink-0 h-18 w-auto md:h-28 lg:h-24"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#hero"
            className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <IoHome className="text-3xl" />
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <MdConstruction className="text-3xl" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <AiFillContacts className="text-3xl" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <RiAdminFill className="text-3xl" />
          </a>
          {/* Login Toggle Button */}
          <button
            onClick={toggleLogin}
            className={`flex items-center justify-center border p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D] ${
              showLogin
                ? "border-[#FBC02D] text-[#FBC02D] bg-white/5"
                : "border-white/20"
            }`}
            aria-label="Toggle login panel"
          >
            <RiLoginBoxFill className="text-3xl" />
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowLogin(false); //closing login
          }}
          className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1A1A1D]/95 backdrop-blur-md border-t border-white/10 flex flex-col items-center gap-4 py-6 md:hidden z-50 shadow-2xl">
          <a
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <IoHome className="text-2xl" />{" "}
            <span className="font-medium">Home</span>
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <MdConstruction className="text-2xl" />{" "}
            <span className="font-medium">Projects</span>
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <AiFillContacts className="text-2xl" />{" "}
            <span className="font-medium">Contact</span>
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <RiAdminFill className="text-2xl" />{" "}
            <span className="font-medium">Admin</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false);
              setShowLogin(true);
            }}
            className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
          >
            <RiLoginBoxFill className="text-2xl" />{" "}
            <span className="font-medium">Login</span>
          </button>
        </div>
      )}

      {/* Render Inserted Separate Login Component */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  );
}
