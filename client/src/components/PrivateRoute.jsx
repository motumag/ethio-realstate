import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
// Make route to sign in if the user is not login
export default function Private() {
  const privateUserProfile = useSelector((state) => state.user);
  const { currentUser } = privateUserProfile.user;
  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
}
