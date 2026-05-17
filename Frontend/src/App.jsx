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
import { YourBlog } from './Pages/YourBlog'
import Comments from './Pages/Comments'
import { CreateBlog } from './Pages/CreateBlog'



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
    element:<><Navbar/><Dashboard/></>,
    children:[
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "your-blog",
        element: <YourBlog/>
      },
      {
        path: "comments",
        element: <Comments/>
      },
      {
        path: "write-blog",
        element: <CreateBlog/>
      },
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