import { AvatarImage } from "@/Components/ui/avatar";
import { Card } from "@/Components/ui/card";
import { Avatar } from "../Components/ui/avatar";
import React from "react";
// import userLogo from "../assets/user.jpg";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Profile = () => {
  return (
    <div className=" pt-20 md:ml-80 md:h-screen">
      <div className="max-w-6xl mx-auto mt-8">
        <Card className="flex md:flex-row flex-col gap-10 p-6 md:p-10 dark:bg-gray-800 mx-4  md:mx-0">
          {/* image section......  */}
          <div className="flex flex-col items-center justify-center md:w-100">
            {/* <Avatar className="w-40 h-40 border-2">
              <AvatarImage src={userLogo} />
            </Avatar> */}
            <h1 className="text-center font-semibold text-xl text-gray-700 dark:text-gray-300 mt-3">Mern Stack Developer</h1>
            <div className="flex gap-4 items-center">
              <Link><FaFacebook className="w-6 h-6 text-gray-800 dark:text-gray-300"/></Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
