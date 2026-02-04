// src/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4 text-xl font-bold border-b">Dashboard</div>
        <nav className="p-4 space-y-2">
          <NavLink to="/dashboard" className="block p-2 hover:bg-gray-200 rounded">Home</NavLink>
          <NavLink to="/dashboard/projects" className="block p-2 hover:bg-gray-200 rounded">Projects</NavLink>
          <NavLink to="/dashboard/team" className="block p-2 hover:bg-gray-200 rounded">Team</NavLink>
          <NavLink to="/dashboard/reviews" className="block p-2 hover:bg-gray-200 rounded">Reviews</NavLink>
          <NavLink to="/dashboard/blogs" className="block p-2 hover:bg-gray-200 rounded">Blogs</NavLink>
          <NavLink to="/dashboard/contacts" className="block p-2 hover:bg-gray-200 rounded">Contacts</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
