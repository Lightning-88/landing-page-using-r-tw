import React from "react";
import reactLogo from "../assets/react.svg";
import { Sun } from "react-feather";
import { Search } from "react-feather";
import { Menu } from "react-feather";

function Navbar() {
  return (
    <div className="flex justify-between items-center fixed left-0 right-0 top-0 p-1 px-[7%] shadow-2xl text-white bg-[#24292e]">
      <div className="img">
        <a href="">
          <img src={reactLogo} alt="navbar-logo" />
        </a>
      </div>
      <div className="hidden sm:block">
        <a href="" className="mx-3 hover:text-blue-400">
          Home
        </a>
        <a href="" className="mx-3 hover:text-blue-400">
          About
        </a>
        <a href="" className="mx-3 hover:text-blue-400">
          Product
        </a>
        <a href="" className="mx-3 hover:text-blue-400">
          Gallery
        </a>
      </div>
      <div className="flex justify-center items-center flex-row my-4">
        <button>
          <Search className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
        <button>
          <Sun className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
        <button className="sm:hidden">
          <Menu className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
