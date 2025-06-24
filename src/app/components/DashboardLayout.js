"use client";

import { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  const links = [
    { label: "Dashboard", icon: <FiHome />, href: "/dashboard" },
    { label: "Users", icon: <FiUsers />, href: "#" },
    { label: "Analytics", icon: <FiBarChart2 />, href: "#" },
    { label: "Settings", icon: <FiSettings />, href: "#" },
    { label: "Logout", icon: <FiLogOut />, href: "#" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-16"
        } bg-white shadow-md transition-all duration-300`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-purple-600">
            {open ? "Artistly" : "🎵"}
          </h1>
          <button onClick={() => setOpen(!open)}>
            <FiMenu className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="flex items-center gap-3 text-gray-700 hover:text-purple-600 text-sm font-medium px-3 py-2 rounded hover:bg-purple-50 transition"
            >
              {link.icon}
              {open && link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
