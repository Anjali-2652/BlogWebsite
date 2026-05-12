import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import About from "./Pages/About"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Navbar from './Components/Navbar'
import { Dashboard } from './Pages/Dashboard'
import { Profile } from './Pages/Profile'



const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home/></>
  },
  {
    path :"/blogs",
    element:<><Navbar/><Blogs/></>
  },
   {
    path :"/about",
    element:<><Navbar/><About/></>
  },
   {
    path :"/login",
    element:<><Navbar/><Login/></>
  },
   {
    path :"/signup",
    element:<><Navbar/><SignUp/></>
  },
  {
    path : "/dashboard",
    element:<><Dashboard/></>,
    children:[
      {
        path: "profile",
        element: <Profile/>
      }
    ]
  }
])


 const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App