import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Landing/Home";
import About from "../pages/Landing/About";
import Services from "../pages/Landing/Services";
import Contact from "../pages/Landing/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import Devices from "../pages/Landing/Devices";
import DeviceInfo from "../pages/Landing/DeviceInfo";
import DoctorProfile from "../pages/Landing/DoctorProfile";
import ProtectedRoute from "../components/dashboard/ProtectedRoute";
import Login from "../pages/Dashboard/AuthAdmin/Login";
import DoctorsList from "../pages/Dashboard/Doctors/DoctorsList";
import AddDoctor from "../pages/Dashboard/Doctors/AddDoctor";
import { Doctors } from "../pages/Landing/Doctors";
import DoctorDetails from "../pages/Dashboard/Doctors/DoctorDetails";
import EditDoctor from "../pages/Dashboard/Doctors/EditDoctor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "doctors", element: <Doctors /> },
      { path: "doctors/:id", element: <DoctorProfile /> },
      { path: "doctors/:id", element: <DoctorProfile /> },
      { path: "devices", element: <Devices /> },
      { path: "devices/:id", element: <DeviceInfo /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { 
        index: true,
        element: <Dashboard /> 
      },
      {
        path: "doctors",
        element: <DoctorsList /> 
      },
      {
        path: "doctors/:id",
        element: <DoctorDetails /> 
      },
      {
        path: "edit-doctor/:id",
        element: <EditDoctor /> 
      },
      {
        path: "add-doctor",
        element: <AddDoctor /> 
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
