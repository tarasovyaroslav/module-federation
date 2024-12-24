import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./routes";
import { authAppRoutingPrefix } from "./constants";

const browserRouter = createBrowserRouter(routes, {
  basename: `/${authAppRoutingPrefix}`,
});

export function Router() {
  return <RouterProvider router={browserRouter} />;
}
