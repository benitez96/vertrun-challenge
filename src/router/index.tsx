import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { HomePage } from "../pages/HomePage";
import { StatsPage } from "../pages/StatsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { ActivitiesPage } from "../pages/ActivitiesPage";
import { ExchangeTokenPage } from "../pages/ExchangeTokenPage";
import { PrivateRoutes } from "../components/PrivateRoutes";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: '/',
        element: <PrivateRoutes />,
        children: [
          {
            path: 'activities',
            element: <ActivitiesPage />,
          },
          {
            path: 'stats',
            element: <StatsPage />,
          },
        ],
      },
      {
        path: 'exchange-token',
        element: <ExchangeTokenPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router
