import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-300 h-[100px] w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold primary-color">Nethmini Prabodha</h1>
        <ul className="hidden md:flex">
          <li className="p-5  hover:text-blue-400">
            <a href="#hero">Home</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#about">About</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#projects">My Projects</a>
          </li>
          <li className="p-5 hover:text-blue-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] z-10 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Nethmini Prabodha</h1>
        <ul className="pt-8 text-2xl">
          <li className="p-2">
            <a href="#hero" onClick={handleNav}>
              Home
            </a>
          </li>

          <li className="p-2">
            <a href="#skills" onClick={handleNav}>
              Skills
            </a>
          </li>
          <li className="p-2">
            <a href="#about" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="p-2">
            <a href="#projects" onClick={handleNav}>
              My Projects
            </a>
          </li>
          <li className="p-2">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
