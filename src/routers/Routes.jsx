import {
    createBrowserRouter,
  } from "react-router-dom";

import MainLaoyout from "../layout/MainLaoyout";
import Home from "../pages/home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaoyout />,
      children: [ 
        {
            path: '/',
            element: <Home />
        }
      ]
    },
  ]);

  export default router;