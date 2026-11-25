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
    username: "engineer_sara",
    userType: "user",
    createdAt: "2026-11-18",
  },
  {
    id: 3,
    username: "client_aramco_ops",
    userType: "client",
    createdAt: "2026-11-24",
  },
];

export default function UserList({ users = SAMPLE_USERS, onDeleteUser }) {
  const [localUsers, setLocalUsers] = useState(users);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [roleFilter, setRoleFilter] = useState("all");

  // Sync if parent passes updated users prop
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

  const getRoleBadgeStyle = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-[#1a1a1d] text-[#fbc02d] border border-[#1a1a1d]";
      case "client":
        return "bg-[#fbc02d]/15 text-[#1a1a1d] border border-[#fbc02d]/40";
      default:
        return "bg-zinc-200/70 text-zinc-700 border border-zinc-300";
    }
  };

  return (
    <div className="w-full bg-zinc-50 border border-zinc-200 p-6 md:p-8 relative shadow-xs text-[#1a1a1d]">
      {/* Subtle architectural corner grid detail */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#fbc02d]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#fbc02d]" />

      {/* Header & Role Filter */}
      <div className="mb-6 pb-4 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[3px] text-[#fbc02d] font-bold mb-1">
            Directory Registry
          </p>
          <h3 className="text-xl font-bold tracking-tight text-[#1a1a1d]">
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
              className={`px-3 py-1.5 text-[0.65rem] uppercase tracking-widest font-bold transition-all cursor-pointer border ${
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

      {/* Responsive Table */}
      <div className="overflow-x-auto bg-white border border-zinc-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-100/70 text-[0.65rem] uppercase tracking-widest text-zinc-500 font-bold">
              <th className="py-3.5 px-4">Username</th>
              <th className="py-3.5 px-4">Designation</th>
              <th className="py-3.5 px-4 hidden sm:table-cell">Provisioned</th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 text-sm">
            {displayedUsers.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 px-4 text-center text-zinc-400 text-xs uppercase tracking-widest"
                >
                  No accounts found for this filter.
                </td>
              </tr>
            ) : (
              displayedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-zinc-50/80 transition-colors"
                >
                  <td className="py-3.5 px-4 font-medium text-[#1a1a1d]">
                    {user.username}
                  </td>

                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-0.5 text-[0.65rem] uppercase tracking-widest font-bold ${getRoleBadgeStyle(
                        user.userType,
                      )}`}
                    >
                      {user.userType}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-zinc-500 font-light text-xs hidden sm:table-cell">
                    {user.createdAt || "—"}
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    {confirmDeleteId === user.id ? (
                      <div className="inline-flex items-center gap-2">
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
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
