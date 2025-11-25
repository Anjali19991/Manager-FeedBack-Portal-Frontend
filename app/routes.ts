// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
import { RouteObject } from "react-router-dom";
import Login from "./routes/login";
import Dashboard from "./routes/dashboard";
import CreateRecord from "./routes/create-record";
import ViewRecord from "./routes/view-record.$id";

export const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/create", element: <CreateRecord /> },
  { path: "/view/:id", element: <ViewRecord /> },
];
