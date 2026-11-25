import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

// ICONS
import { IoHome } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";
import { RiAdminFill, RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

// COMPONENTS & ASSETS
import Login from "./Login";
import logo from "../assets/images/logo.png";
// UTILS
import { getUserWithExpiry, clearUserStorage } from "../utils/authStorage";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("itqaan-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  // inProg
  useEffect(() => {
    const checkAuth = () => {
      const validUser = getUserWithExpiry();
      setUser(validUser);

      // Redirect to home if session expires while on /admin
      if (!validUser && location.pathname.startsWith("/admin")) {
        navigate("/", { replace: true });
      }
    };

    checkAuth();
    const interval = setInterval(checkAuth, 60 * 1000); // Re-check every 60s
    return () => clearInterval(interval);
  }, [location, navigate]);

  // inProg end

  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem("itqaan-user"));
  //   setUser(savedUser);
  // }, [location]);

  // inProg
  const handleLogout = () => {
    clearUserStorage();
    sessionStorage.clear();
    setUser(null);
    setIsOpen(false);
    navigate("/", { replace: true });
  };

  // inProg end
  // const handleLogout = () => {
  //   localStorage.removeItem("itqaan-user");
  //   sessionStorage.clear();
  //   setUser(null);
  //   setIsOpen(false);
  //   navigate("/", { replace: true });
  // };

  const toggleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
    setIsOpen(false);
  };
  // you stopped here. observe and push
  // one navbar now.
  return (
    <nav className="sticky top-0 z-50 bg-[#1A1A1D] text-white px-6 py-2 shadow-lg backdrop-blur-md">
      {/* Decorative Bottom Border Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-l from-[#FBC02D] to-[#1A1A1D]"></div>

      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo + Admin Label (Only visible on /admin) */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={logo}
            alt="company logo"
            className="shrink-0 h-18 w-auto md:h-28 lg:h-24"
          />

          {user && isAdminPage && (
            <>
              <span
                aria-hidden="true"
                className="h-8 md:h-12 w-px bg-white/30"
              />
              <span className="text-white text-base md:text-xl font-bold uppercase tracking-wider">
                Admin
              </span>
            </>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          {isAdminPage ? (
            <NavLink
              to="/"
              className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
            >
              Visit Website
            </NavLink>
          ) : (
            <>
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
            </>
          )}

          {/* Auth Controls (Desktop) */}
          {user ? (
            <div className="flex items-center gap-2">
              {!isAdminPage && (
                <NavLink
                  to="/admin"
                  className="flex items-center justify-center border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
                >
                  <RiAdminFill className="text-3xl" />
                </NavLink>
              )}

              <button
                onClick={handleLogout}
                aria-label="Log out"
                className="flex items-center justify-center border border-white/20 p-2.5 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
              >
                <RiLogoutBoxFill className="text-3xl" />
              </button>
            </div>
          ) : (
            <button
              onClick={toggleLogin}
              aria-label="Toggle login panel"
              className={`flex items-center justify-center border p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D] ${
                showLogin
                  ? "border-[#FBC02D] text-[#FBC02D] bg-white/5"
                  : "border-white/20"
              }`}
            >
              <RiLoginBoxFill className="text-3xl" />
            </button>
          )}
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowLogin(false);
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
          {isAdminPage ? (
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
            >
              <IoHome className="text-2xl" />
              <span className="font-medium">Visit Website</span>
            </NavLink>
          ) : (
            <>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
              >
                <IoHome className="text-2xl" />
                <span className="font-medium">Home</span>
              </a>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
              >
                <MdConstruction className="text-2xl" />
                <span className="font-medium">Projects</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
              >
                <AiFillContacts className="text-2xl" />
                <span className="font-medium">Contact</span>
              </a>
            </>
          )}

          {/* Auth Controls (Mobile) */}
          {user ? (
            <>
              {!isAdminPage && (
                <NavLink
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
                >
                  <RiAdminFill className="text-2xl" />
                  <span className="font-medium">Admin</span>
                </NavLink>
              )}

              <button
                onClick={handleLogout}
                className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
              >
                <RiLogoutBoxFill className="text-2xl" />
                <span className="font-medium">Logout</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setIsOpen(false);
                setShowLogin(true);
              }}
              className="flex w-11/12 items-center justify-center gap-3 border border-white/20 p-3 transition-colors hover:bg-white/10 hover:border-[#FBC02D] hover:text-[#FBC02D]"
            >
              <RiLoginBoxFill className="text-2xl" />
              <span className="font-medium">Login</span>
            </button>
          )}
        </div>
      )}

      {/* Login Dropdown */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </nav>
  );
}
