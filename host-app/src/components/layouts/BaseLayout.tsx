import { Link, Outlet } from "react-router-dom";
import { authAppRoutingPrefix, nextAppRoutingPrefix, userProfileRoutingPrefix } from "@/routes/constants";

export function BaseLayout() {
  return (
    <>
      <nav style={{ marginBottom: "3rem" }}>
        <Link to={`/${authAppRoutingPrefix}/login`} style={{ marginRight: "1rem" }}>
          Sign In
        </Link>
        <Link to={`/${authAppRoutingPrefix}/register`} style={{ marginRight: "1rem" }}>
          Sign Up
        </Link>
        <Link to={`/${nextAppRoutingPrefix}/page-a`} style={{ marginRight: "1rem" }}>
          Rick And Morty
        </Link>
        <Link to={`/${userProfileRoutingPrefix}/page-b`}>Profile</Link>
      </nav>
      <Outlet />
    </>
  );
}
