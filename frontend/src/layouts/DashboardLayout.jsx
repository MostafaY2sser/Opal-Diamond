// src/layouts/DashboardLayout.jsx
import { useTranslation } from "react-i18next";
import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar setSidebarOpen={setSidebarOpen}/>

      <div className="flex flex-1">

        {/*  */}
        <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
        
        {/* Main Content */}
        <main className="flex-1 p-2 md:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
