import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navbar = [
    { name: "Home", link: "#hero" },
    { name: "Skills", link: "#skills" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Work Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-black text-gray-300 h-[100px] w-full fixed top-0 left-0 z-50 ">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full">
        <h1 className="text-3xl font-bold primary-color">Nethmini Prabodha</h1>
        <ul className="hidden md:flex ">
          {navbar.map((item, index) => (
            <li key={index} className="mx-6  hover:text-blue-500 text-[20px]">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] z-10 ease-in-out duration-500 container mx-auto"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="md:text-3xl text-2xl primary-color m-4">Nethmini Prabodha</h1>
        <ul className="pt-8 md:text-2xl text-xl m-4 md:m-0">
          {navbar.map((item, index) => (
            <li key={index} className="my-4">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

