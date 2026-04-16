import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import About from "./Pages/About"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path :"/blogs",
    element:<Blogs/>
  },
   {
    path :"/about",
    element:<About/>
  },
   {
    path :"/login",
    element:<Login/>
  },
   {
    path :"/signup",
    element:<SignUp/>
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