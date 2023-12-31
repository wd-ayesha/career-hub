import React, { useState } from "react";
import "./Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-10">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>
      <div className="flex items-center justify-between">
      <h1 className="ml-2 text-3xl font-bold text-gray-800 hidden sm:hidden md:block">
          JobZone
        </h1>
        <ul
          className={`md:flex absolute md:static duration-500 pl-8 py-2 items-center ${
            open ? "top-28" : "-top-44"
          }`}
        >
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>

          <li>
            <button className="btn btn-primary bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-700 text-white font-semibold">
              Start Applying
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
