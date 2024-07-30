import {
    createBrowserRouter,
  } from "react-router-dom";

import MainLaoyout from "../layout/MainLaoyout";
import Home from "../pages/home/Home";
import DashBoard from "../pages/dashboard/DashBoard";
import Dashboard from "../layout/DashLayout";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import ManageUser from "../pages/dashboard/manageUser/ManageUser";
import UserProfile from "../pages/dashboard/userProfile/UserProfile";
import ManageQuiz from "../pages/dashboard/manageQuiz/ManageQuiz";
import Login from "../component/auth/Login";
import Signup from "../component/auth/Signup";

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
            // element: <AllQuizes />
        },
        // {
        //     path: '/dashBoard',
        //     element: <DashBoard />
        // }
      ]
    },
    {
      path: "/dashBoard",
      element: (
       
        <Dashboard></Dashboard>
        
      ),
  
      children: [
        // normal users routes
        {
          path: "userHome",
          // element: <UserHome></UserHome>,
        },
       
       
       
       
       
       
        {
          path: "adminHome",
          element: <AdminHome></AdminHome>
           
        
        },
        {
          path: "addQuiz",
          element: "",
        },
        {
          path: "manageQuiz",
          element: <ManageQuiz />
           
   
        },
        {
          path: "UpdateQuiz/:id",
          element: ""
          // loader: ({ params }) =>
          //   fetch(`https://assignment12-server-seven.vercel.app/Contests/${params.id}`),
        },
        {
          path: "mangeUsers",
          element: (
           
              <ManageUser></ManageUser>
       
          
          ),
        },
        {
          path: "userProfile",
          element: <UserProfile></UserProfile>,
        },
      ],
      
  
    },
    
      {
        path: "signin",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <Signup />,
      },
  ]);

  export default router;