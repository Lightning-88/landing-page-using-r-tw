import logo from "../assets/nav-logo.png";
import { useState } from "react";
import { Sun, Search, Menu } from "react-feather";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar flex justify-between items-center fixed left-0 right-0 top-0 h-16 px-12 max-w-screen-xl shadow-2xl text-white bg-[#24292e]">
      <div className="w-8 h-8">
        <a href="#">
          <img src={logo} alt="navbar-logo" />
        </a>
      </div>
      <div
        className={`absolute top-16 h-screen w-56 bg-[#273646] flex flex-col items-center pt-4 gap-4 transition-all duration-500 md:hidden ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <a href="#" className="mx-3 hover:text-blue-400">
          Home
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          About
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          Product
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          Gallery
        </a>
      </div>
      <div className="hidden md:block">
        <a href="#" className="mx-3 hover:text-blue-400">
          Home
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          About
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          Product
        </a>
        <a href="#" className="mx-3 hover:text-blue-400">
          Gallery
        </a>
      </div>
      <div className="flex justify-center items-center flex-row">
        <button>
          <Search className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
        <button>
          <Sun className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
        <button className="md:hidden" onClick={toggleNavbar}>
          <Menu className="cursor-pointer w-5 mx-0.5 hover:text-blue-400" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
