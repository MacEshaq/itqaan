import { useState } from "react";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Login({ onClose }) {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false); // 1. Start as false
  const [errorMsg, setErrorMsg] = useState(null);

  // 2. Track input values (pre-filled with your test defaults)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`${API_URL}/itqaan/server/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_name: userName, password: password }),
      });

      //THIS IS THE RESPONSE 'data'.
      // userName: user.user_name,
      //   memberName: user.member_name,
      //   userType: user.user_type,
      //   token,
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to login in");
      }

      // SUCCESS LOGIN

      localStorage.setItem("itqaan-user", JSON.stringify(data)); //json is with the token
      setUser(data);
      console.log(data);
      if (onClose) onClose();
      navigate("/admin"); //redirect to admin page once login is successfull.
    } catch (err) {
      // This updates your `error` state so your red alert box renders in the UI
      setErrorMsg(err.message);
    } finally {
      // Re-enables the Log In button whether it succeeded or failed
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-full right-0 w-full md:w-96 bg-[#1A1A1D] border-t border-x md:border-b border-white/10 p-6 md:mr-6 shadow-2xl z-50">
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

      {/* 3. Render error messages inside the UI */}
      {errorMsg && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-xs">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-semibold">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          disabled={loading}
          className="w-full bg-[#FBC02D] text-black font-bold py-3 tracking-wider hover:bg-[#fbc02d]/90 disabled:opacity-50 transition-colors uppercase text-sm mt-2"
          // onClick={() => navigate("/admin", { replace: true })}
        >
          {loading ? "Logging In..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
