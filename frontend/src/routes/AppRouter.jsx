import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingLayout from "../layouts/LandingLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Landing/Home";
import About from "../pages/Landing/About";
import Services from "../pages/Landing/Services";
import Projects from "../pages/Landing/Projects";
import Team from "../pages/Landing/Team";
import Reviews from "../pages/Landing/Reviews";
import Blog from "../pages/Landing/Blog";
import Contact from "../pages/Landing/Contact";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import ProjectsList from "../pages/Dashboard/Projects/ProjectsList";
import AddProject from "../pages/Dashboard/Projects/AddProject";
import EditProject from "../pages/Dashboard/Projects/EditProject";
import TeamList from "../pages/Dashboard/Team/TeamList";
import AddMember from "../pages/Dashboard/Team/AddMember";
import EditMember from "../pages/Dashboard/Team/EditMember";
import ReviewsList from "../pages/Dashboard/Reviews/ReviewsList";
import AddReview from "../pages/Dashboard/Reviews/AddReview";
import EditReview from "../pages/Dashboard/Reviews/EditReview";
import BlogsList from "../pages/Dashboard/Blogs/BlogsList";
import AddBlog from "../pages/Dashboard/Blogs/AddBlog";
import EditBlog from "../pages/Dashboard/Blogs/EditBlog";
import ContactsList from "../pages/Dashboard/Contacts/ContactsList";
import AdminLogin from "../pages/Dashboard/AuthAdmin/Login";
import AdminRoute from "./AdminRoute";
import { DoctorsList } from "../pages/Landing/DoctorsList";
import Devices from "../pages/Landing/Devices";
import DeviceInfo from "../pages/Landing/DeviceInfo";
import DoctorProfile from "../pages/Landing/DoctorProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "doctors", element: <DoctorsList /> },
      { path: "doctors/:id", element: <DoctorProfile /> },
      { path: "doctors/:id", element: <DoctorProfile /> },
      { path: "devices", element: <Devices /> },
      { path: "devices/:id", element: <DeviceInfo /> },
      { path: "contact", element: <Contact /> },
    ],
  },
   {
    path: "/dashboard/login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: <AdminRoute />,
    children: [
      { element: <DashboardLayout />, children: [
        { index: true, element: <Dashboard /> },
        { path: "projects", element: <ProjectsList /> },
        { path: "projects/add", element: <AddProject /> },
        { path: "projects/:id/edit", element: <EditProject /> },
        { path: "team", element: <TeamList /> },
        { path: "team/add", element: <AddMember /> },
        { path: "team/:id/edit", element: <EditMember /> },
        { path: "reviews", element: <ReviewsList /> },
        { path: "reviews/add", element: <AddReview /> },
        { path: "reviews/:id/edit", element: <EditReview /> },
        { path: "blogs", element: <BlogsList /> },
        { path: "blogs/add", element: <AddBlog /> },
        { path: "blogs/:id/edit", element: <EditBlog /> },
        { path: "contacts", element: <ContactsList /> },
      ]},
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
