import React, { useState } from "react";
// import CreateUserForm from "./CreateUserForm";
// import UserList from "./UserList";

import Register from "./Registration";
import UserList from "./UserList";

export default function AdminUsersPage() {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <h1 className="lg:col-span-12 text-2xl md:text-3xl font-bold text-[#1a1a1d]">
        User Management
      </h1>
      <div className="lg:col-span-5">
        <Register />
      </div>
      <div className="lg:col-span-7">
        <UserList />
      </div>
    </div>
  );
}
