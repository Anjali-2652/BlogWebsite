import React, { useState } from "react";
import heroImg from "../assets/hero.jpg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../Components/ui/card";
import {Link, useNavigate } from "react-router-dom";
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "../Components/ui/button";
import axios from "axios";
import { toast } from "sonner";

import { audioWorklet } from "globals";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/authSlice";

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const {loading} = useSelector(store=>store.auth)
   const [input, setInput] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
const handleSubmit = async(e)=>{
  e.preventDefault()
  console.log(input)

  try {
    setLoading(true)
    const res = await axios.post("http://localhost:8000/api/v1/user/login", input , {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    if(res.data.success){
      navigate("/")
      dispatch(setUser(res.data.user))
      toast.success(res.data.message)
    }
  } catch (error) {
    console.log(error)
    
  }finally{
    setLoading(false)
  }
}


  return (
    <div className="flex h-screen md:pt-14 md:h-157.5 gap-x-10  ">
      <div className="hidden md:block">
        <img src={heroImg} alt="" className="h-142.5 w-full object-cover" />
      </div>
      <div className="flex  items-center flex-1 px-4 md:px-0">
        <Card className="w-full shadow-lg max-w-md rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">
                Login into your account
              </h1>
            </CardTitle>
            <p className="mt-2 text-sm font-serif text-center dark:text-gray-300">
              Enter your details below to login to your account
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
              
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name= "email"
                  value = {input.email}
                  onChange = {handleChange}
                  placeholder="Enter your email"
                  className=" dark:border-gray-600 dark:bg-gray-900"
                />
              </div>
              <div className="relative">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                   name= "password"
                  value = {input.password}
                  onChange = {handleChange}
                  className=" dark:border-gray-600 dark:bg-gray-900"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  type="button"
                  className="absolute right-3 top-6 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              
              <Button type="submit" className="w-full">
                {
                  loading ? (
                    <>
                    <Loader2 className="mrr-2 w-4 h-4 animate-spin"/>
                    please wait
                    </>
                  ) : ("Login")
                }
              </Button>
              <p className="text-center txt-gray-600 dark:text-gray-300">
                {" "}
                  Don't have an account?{" "}
                <Link to="/signup">
                  <span className="underline cursor-pointer hover: text-gray-800 dark:hover:text-gray-100">
                    {" "}
                    Sign Up
                  </span>
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Login;
