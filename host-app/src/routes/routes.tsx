import { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { BaseLayout } from "@/components/layouts/BaseLayout";
import { authAppRoutingPrefix } from "./constants";

// @ts-ignore
const AuthAppLazy = lazy(() => import("authApp/App"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${authAppRoutingPrefix}`} />,
      },
      {
        path: `/${authAppRoutingPrefix}/*`,
        element: (
          <Suspense fallback="Loading Auth App...">
            <AuthAppLazy />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: <Navigate replace to={`/`} />,
      },
      // {
      //   path: `/${nextAppRoutingPrefix}/*`,
      //   element: (
      //     <Suspense fallback="Loading App2...">
      //       <App2Lazy />
      //     </Suspense>
      //   ),
      // },
    ],
  },
];
