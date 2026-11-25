import React, { useState } from "react";

export default function CreateUserForm({ onCreateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    userType: "user", // Default selection
  });

  const [status, setStatus] = useState({ error: "", success: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error || status.success) setStatus({ error: "", success: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setStatus({ error: "Passwords do not match.", success: "" });
      return;
    }

    const payload = {
      username: formData.username,
      password: formData.password,
      userType: formData.userType,
    };

    if (onCreateUser) {
      onCreateUser(payload);
    } else {
      console.log("Admin created account:", payload);
    }

    // Reset form and show confirmation
    setFormData({
      username: "",
      password: "",
      confirmPassword: "",
      userType: "user",
    });
    setStatus({
      error: "",
      success: `Account created successfully with role: ${payload.userType.toUpperCase()}.`,
    });
  };

  return (
    <div className="w-full max-w-2xl bg-zinc-50 border border-zinc-200 p-6 md:p-8 relative shadow-xs text-[#1a1a1d]">
      {/* Subtle architectural corner grid detail */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fbc02d]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#fbc02d]" />

      {/* Compact Admin Header */}
      <div className="mb-6 pb-4 border-b border-zinc-200">
        <p className="text-[0.65rem] uppercase tracking-[3px] text-[#fbc02d] font-bold mb-1">
          Admin Control
        </p>
        <h3 className="text-xl font-bold tracking-tight text-[#1a1a1d]">
          Provision User Account
        </h3>
      </div>

      {/* Inline Status Messages */}
      {status.error && (
        <div className="mb-5 p-3 bg-red-50 border-l-2 border-red-500 text-red-700 text-xs font-medium">
          {status.error}
        </div>
      )}
      {status.success && (
        <div className="mb-5 p-3 bg-emerald-50 border-l-2 border-emerald-500 text-emerald-700 text-xs font-medium">
          {status.success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              placeholder="account_username"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="userType"
              className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
            >
              Account Role
            </label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
              className="w-full bg-white border border-zinc-300 px-4 py-3 text-sm focus:outline-hidden focus:border-[#fbc02d] focus:ring-1 focus:ring-[#fbc02d] transition-all duration-300 text-[#1a1a1d] font-light cursor-pointer"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="client">Client</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-[0.7rem] uppercase tracking-widest text-zinc-500 mb-2 font-bold"
            >
              Temporary Password
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
          className="w-full text-center py-3.5 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 bg-[#fbc02d] text-[#1a1a1d] border border-[#fbc02d] hover:bg-transparent hover:text-[#fbc02d] cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
