import React, { useState } from "react";
import heroImg from "../assets/hero.jpg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../Components/ui/card";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Label } from "../Components/ui/label";
import { Input } from "../Components/ui/input";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "../Components/ui/button";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/authSlice";

export const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
    const {loading} = useSelector(store=>store.auth)
    const dispatch = useDispatch();


  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      dispatch(setLoading(true))
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if(res.data.success){ 
        navigate("/login")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }finally{
      dispatch(setLoading(false))
    }
  };

  return (
    <div className="flex h-screen md:pt-14 gap-x-10 md:h-157.5 ">
      <div className="hidden md:block">
        <img src={heroImg} alt="" className="h-142.5 w-full object-cover" />
      </div>
      <div className="flex  items-center flex-1 px-4 md:px-0">
        <Card className="w-full shadow-lg max-w-md rounded-2xl dark:bg-gray-800 dark:border-gray-600">
          <CardHeader>
            <CardTitle>
              <h1 className="text-center text-xl font-semibold">
                Create an account
              </h1>
            </CardTitle>
            <p className="mt-2 text-sm font-serif text-center dark:text-gray-300">
              Enter your details below to create your account
            </p>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <div>
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className=" dark:border-gray-600 dark:bg-gray-900"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className=" dark:border-gray-600 dark:bg-gray-900"
                  />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="john.doe@gmail.com"
                  className=" dark:border-gray-600 dark:bg-gray-900"
                />
              </div>
              <div className="relative">
                <Label>Password</Label>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="create a password"
                  className=" dark:border-gray-600 dark:bg-gray-900"
                  value={user.password}
                  onChange={handleChange}
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
                  ) : ("SignUp")
                }
              </Button>
              <p className="text-center txt-gray-600 dark:text-gray-300">
                {" "}
                Already have an account?{" "}
                <Link to="/login">
                  <span className="underline cursor-pointer hover: text-gray-800 dark:hover:text-gray-100">
                    {" "}
                    Sign in
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
export default SignUp;
