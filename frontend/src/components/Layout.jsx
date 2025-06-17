import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Layout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      await fetch("/api/v1/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      queryClient.setQueryData(["authUser"], null);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navItems = [
    { name: "Home", path: "/Home" },
    { name: "Mock Interview", path: "/practise-quiz" },
    { name: "ChatBot", path: "/mock-interview" },
    { name: "Upskilling", path: "/upskilling" },
    { name: "Resume", path: "/resume-builder" },
    { name: "Challenges", path: "/daily" },
  ];

  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-3 flex justify-between items-center z-50">
        
        {/* Left: GramAI logo or title */}
        <div className="w-1/6 text-xl font-bold text-blue-700">
          Rural<span className="text-black">Rise</span>
        </div>

        {/* Centered nav items */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-blue-600 px-4 py-2 rounded font-medium"
                  : "text-gray-700 hover:text-blue-600 px-4 py-2"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Logout button on the right */}
        <div className="w-1/6 flex justify-end">
          <button
            onClick={handleLogout}
            className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Page content below navbar */}
      <div className="pt-20 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
