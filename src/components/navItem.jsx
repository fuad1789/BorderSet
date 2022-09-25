import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function NavItem({ Logo, children, IsArrow = true }) {
  return (
    <a
      href="#"
      className="flex gap-1 p-2 justify-between  items-center ml-4 rounded group transition-colors duration-150	  hover:bg-[#036aa120]"
    >
      <div className="flex gap-x-2 items-center">
        {<Logo className="text-slate-300 group-hover:text-slate-700" />}{" "}
        <p className="text-slate-400 transition-colors duration-150  group-hover:text-slate-900">
          {children}
        </p>
      </div>
      <span>
        {IsArrow && <IoIosArrowForward className="bg-slate-200 rounded-sm" />}
      </span>
    </a>
  );
}
