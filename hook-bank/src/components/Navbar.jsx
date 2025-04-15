import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <img className="w-[124px] h-[80px]" src={logo} alt="logo-image" />
      </div>

      <ul className="hidden md:flex gap-14">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              className="hover:text-secondary transition duration-300"
              href={`#${link.id}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden ">
        <img
          onClick={() => setToggle((prev) => !prev)}
          className="w-6 cursor-pointer"
          src={`${toggle ? close : menu}`}
          alt=""
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } py-6 bg-black-gradient absolute z-10 top-14 right-0 mx-4 my-2 rounded-xl sidebar min-w-[140px] text-center justify-center`}
        >
          <ul className="w-full">
            {navLinks.map((link) => (
              <li
                className="w-full hover:bg-secondary mb-3 transition duration-300"
                key={link.id}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
