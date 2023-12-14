import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { StatsPage } from "../pages/StatsPage";
import { ErrorPage } from "../pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: 'stats',
        element: <StatsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router
