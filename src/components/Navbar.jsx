import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-300 h-[80px] w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold primary-color">Nethmini Prabodha</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-blue-400">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#projects">My Projects</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[60%] h-full bg-[#202121] text-gray-300 p-8 z-40 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-8 h-full ease-in-out duration-500 z-40"
          }
        >
          <h1 className="text-3xl font-bold primary-color">Nethmini Prabodha</h1>
          <ul className="space-y-6 text-2xl">
            <li>
              <a href="#hero" onClick={handleNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleNav}>
                Skills
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleNav}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleNav}>
                My Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
