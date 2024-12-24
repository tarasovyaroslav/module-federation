import { Link, Navigate, RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={`/login`} />,
      },
      {
        path: `/login`,
        element: (
          <div>
            <h1>Login Page</h1>
            <Link to={"/register"}>Register</Link>
          </div>
        ),
      },
      {
        path: `/register`,
        element: (
          <div>
            <h1>Register Page</h1>
            <Link to={"/login"}>Login</Link>
          </div>
        ),
      },
      {
        path: "/*",
        element: <Navigate replace to={`/`} />,
      },
    ],
  },
];
