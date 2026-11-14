import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
  const savedUser = JSON.parse(localStorage.getItem("itqaan-user"));

  // 1. Block anyone who is not logged in
  if (!savedUser || !savedUser.token) {
    return <Navigate to="/" replace />;
  }

  // 2. Optional: Block logged-in users who are not admins
  if (allowedRole && savedUser.userType !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // 3. Authorized: render the protected page
  return children;
}
