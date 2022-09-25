import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Blogo from "../assets/Blogo.png";

function TopSideBar({ isSidebar, setIsSidebar }) {
  const handleClick = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div className="w-full h-14 border-b-[1px] bg-white fixed xl:hidden top-0 left-0 flex items-center pl-6">
      <button onClick={handleClick}>
        <GiHamburgerMenu className="text-xl transition-colors duration-300 text-slate-300 hover:text-black" />
      </button>
      <a className="flex items-end gap-x-1 text-[#0369a1] ml-5  cursor-pointer">
        <img src={Blogo} className="w-7" />
        <p className="text-lg">orderSet</p>
      </a>
    </div>
  );
}

export default TopSideBar;
