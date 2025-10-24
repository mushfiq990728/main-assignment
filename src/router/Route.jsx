import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installation from "../Pages/Installation/Installation";
import ErrorPage from "../Pages/Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <AllApps /> },
      { path: "apps/:id", element: <AppDetails /> },
      { path: "installation", element: <Installation /> },
    ],
  },
]);