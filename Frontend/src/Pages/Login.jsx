import React, { useState } from "react";
import heroImg from "../assets/hero.jpg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../Components/ui/card";
import {Link } from "react-router-dom";
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../Components/ui/button";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-screen md:pt-14 md:h-157.5  ">
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
            <form action="" className="space-y-4">
              <div className="flex gap-3">
              
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className=" dark:border-gray-600 dark:bg-gray-900"
                />
              </div>
              <div className="relative">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
                {" "}
                Login{" "}
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
