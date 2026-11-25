import React, { useState } from "react";

const SAMPLE_USERS = [
  {
    id: 1,
    username: "admin_nordz",
    userType: "admin",
    createdAt: "2026-11-10",
  },
  {
    id: 2,
    username: "Mac",
    userType: "user",
    createdAt: "2026-11-18",
  },
  {
    id: 3,
    username: "Bob",
    userType: "client",
    createdAt: "2026-11-24",
  },
];

export default function UserList({ users = SAMPLE_USERS, onDeleteUser }) {
  const [localUsers, setLocalUsers] = useState(users);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [roleFilter, setRoleFilter] = useState("all");

  const displayedUsers = (onDeleteUser ? users : localUsers).filter((u) =>
    roleFilter === "all" ? true : u.userType.toLowerCase() === roleFilter,
  );

  const handleConfirmDelete = (id) => {
    if (onDeleteUser) {
      onDeleteUser(id);
    } else {
      setLocalUsers((prev) => prev.filter((user) => user.id !== id));
    }
    setConfirmDeleteId(null);
  };

  const getRoleTextStyle = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "text-[#1a1a1d] underline decoration-[#fbc02d] decoration-2 underline-offset-4";
      case "client":
        return "text-amber-700";
      default:
        return "text-zinc-500";
    }
  };

  const renderDeleteAction = (user) =>
    confirmDeleteId === user.id ? (
      <div className="inline-flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => handleConfirmDelete(user.id)}
          className="px-2.5 py-1 text-[0.65rem] uppercase tracking-wider font-bold bg-red-600 text-white hover:bg-red-700 transition-colors cursor-pointer"
        >
          Confirm
        </button>
        <button
          type="button"
          onClick={() => setConfirmDeleteId(null)}
          className="px-2.5 py-1 text-[0.65rem] uppercase tracking-wider font-bold bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors cursor-pointer"
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        type="button"
        onClick={() => setConfirmDeleteId(user.id)}
        className="px-3 py-1.5 text-[0.65rem] uppercase tracking-widest font-bold text-red-600 border border-red-200 bg-red-50/50 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-pointer"
      >
        Delete
      </button>
    );

  return (
    <div className="w-full bg-zinc-50 border border-zinc-200 p-4 sm:p-6 md:p-8 relative shadow-xs text-[#1a1a1d]">
      {/* Subtle architectural corner grid detail */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fbc02d]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#fbc02d]" />

      {/* Header & Role Filter */}
      <div className="mb-5 sm:mb-6 pb-4 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[3px] text-[#fbc02d] font-bold mb-1">
            Directory Registry
          </p>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1a1a1d]">
            Active Portal Accounts ({displayedUsers.length})
          </h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {["all", "admin", "user", "client"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              className={`px-2.5 sm:px-3 py-1.5 text-[0.65rem] uppercase tracking-widest font-bold transition-all cursor-pointer border ${
                roleFilter === role
                  ? "bg-[#1a1a1d] text-[#fbc02d] border-[#1a1a1d]"
                  : "bg-white text-zinc-500 border-zinc-300 hover:border-[#1a1a1d] hover:text-[#1a1a1d]"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {displayedUsers.length === 0 ? (
        <div className="bg-white border border-zinc-200 py-8 px-4 text-center text-zinc-400 text-xs uppercase tracking-widest">
          No accounts found for this filter.
        </div>
      ) : (
        <>
          {/* Mobile Stacked Card Layout (< 640px) - Zero Horizontal Scroll */}
          <div className="sm:hidden divide-y divide-zinc-200 bg-white border border-zinc-200">
            {displayedUsers.map((user) => (
              <div key={user.id} className="p-4 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-[#1a1a1d] truncate">
                      {user.username}
                    </p>
                    <p className="text-[0.7rem] text-zinc-400 mt-0.5">
                      Created: {user.createdAt || "—"}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-[0.65rem] uppercase tracking-widest font-bold ${getRoleTextStyle(
                      user.userType,
                    )}`}
                  >
                    {user.userType}
                  </span>
                </div>

                <div className="pt-2 border-t border-zinc-100 flex justify-end">
                  {renderDeleteAction(user)}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop / Tablet Table Layout (>= 640px) */}
          <div className="hidden sm:block bg-white border border-zinc-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-100/70 text-[0.65rem] uppercase tracking-widest text-zinc-500 font-bold">
                  <th className="py-3.5 px-4">Username</th>
                  <th className="py-3.5 px-4">Designation</th>
                  <th className="py-3.5 px-4">Created</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-sm">
                {displayedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-zinc-50/80 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-medium text-[#1a1a1d]">
                      {user.username}
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`text-[0.65rem] uppercase tracking-widest font-bold ${getRoleTextStyle(
                          user.userType,
                        )}`}
                      >
                        {user.userType}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-zinc-500 font-light text-xs">
                      {user.createdAt || "—"}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      {renderDeleteAction(user)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
