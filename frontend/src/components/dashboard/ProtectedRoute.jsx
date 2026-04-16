import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  // Check if the user is authenticated by looking for a token in localStorage
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
