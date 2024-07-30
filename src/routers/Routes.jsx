import {
    createBrowserRouter,
  } from "react-router-dom";

import MainLaoyout from "../layout/MainLaoyout";
import Home from "../pages/home/Home";
import AllQuizes from "../pages/allQuizes/AllQuizes";
import DashBoard from "../pages/dashboard/DashBoard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaoyout />,
      children: [ 
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/allQuizes',
            element: <AllQuizes />
        },
        {
            path: '/dashBoard',
            element: <DashBoard />
        }
      ]
    },
  ]);

  export default router;