import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  ChartColumnBig,
  Edit,
  LogOut,
  Search,
  Menu,
  X,
  UserIcon,
} from "lucide-react";
import { FaMoon, FaRegComment, FaSun } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { setUser } from "../redux/authSlice";
import axios from "axios";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blogs", label: "Blogs" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { theme } = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/logout", {
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        dispatch(setUser(null));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="py-2 fixed w-full dark:bg-gray-800 dark:border-b-gray-600 border-b-gray-300 border-2 bg-white top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex gap-7 items-center">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img
                src={Logo}
                alt="Logo"
                className="w-7 h-7 md:w-10 md:h-10 dark:invert"
              />
              <h1 className="font-bold text-3xl md:text-4xl">Logo</h1>
            </div>
          </Link>
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search here..."
              className="border border-gray-700 dark:bg-gray-900 bg-gray-300 w-72"
            />
            <Button className="absolute right-0 top-0">
              <Search />
            </Button>
          </div>
        </div>

        <nav className="relative flex items-center gap-3">
          <ul className="hidden md:flex gap-7 items-center text-xl font-semibold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button type="button" onClick={() => dispatch(toggleTheme())}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </Button>
            <div className="md:hidden">
              <Button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="absolute right-0 top-full z-20 mt-2 w-56 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-900 md:hidden">
              <ul className="flex flex-col gap-3 text-sm font-semibold">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {!user ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button
                      type="button"
                      onClick={logoutHandler}
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </li>
                )}
              </ul>
            </div>
          )}

          {user ? (
            <div className="ml-7 hidden md:flex gap-3 items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <UserIcon />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ChartColumnBig />
                      <span>Blogs</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FaRegComment />
                      Comments
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit />
                      Write Blog
                      <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <LogOut />
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button type="button" onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="ml-7 hidden md:flex gap-2">
              <Link to="/login">
                <Button type="button">Login</Button>
              </Link>
              <Link to="/signup">
                <Button type="button">SignUp</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
