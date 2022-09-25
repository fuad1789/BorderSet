import React from "react";

import { BsGrid, BsTable } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiAchievement } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import Blogo from "../assets/Blogo.png";
import PremiumPhoto from "../assets/tech-startup-as-non-tech-person.png";

import NavItem from "./navItem";

function Sidebar({ isSidebar, setIsSidebar }) {
  const handleClick = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div
      className={`w-64 flex-shrink-0 transition-all duration-700 ${
        isSidebar ? "left-0" : "-left-64"
      } xl:left-0 flex flex-col gap-y-5 h-full border-r-2 border-color: rgb(100 116 139); p-3  fixed bg-white`}
    >
      <div className="flex items-center justify-between ">
        <a className="flex items-end gap-x-1 text-[#0369a1] ml-5  cursor-pointer">
          <img src={Blogo} className="w-9" />
          <p className="text-lg">orderSet</p>
        </a>
        <AiOutlineClose className="cursor-pointer text-xl xl:hidden" onClick={handleClick}/>
      </div>
      <nav className="flex flex-col gap-y-1">
        <NavItem Logo={BsGrid}>İdarə paneli</NavItem>
        <NavItem Logo={CgProfile}>Profil</NavItem>
        <NavItem Logo={BsTable}>Cədvəl</NavItem>
        <NavItem Logo={SiGoogleclassroom}>Sinif</NavItem>
        <NavItem Logo={GiAchievement}>Naliyyətlər</NavItem>
        <NavItem IsArrow={false} Logo={FiSettings}>
          Ayarlar
        </NavItem>
      </nav>

      <div className="h-44  flex flex-col gap-y-5  items-center justify-end mt-auto bg-slate-200 relative mx-3 p-2 rounded">
        <img
          src={PremiumPhoto}
          alt="prmiumPhoto"
          className="absolute -top-20"
        />
        <p className="text-xs text-center">
          Premium funksiyalarınızdan indi istifadə edin
        </p>
        <button className=" flex items-center justify-center text-xs text-white px-2 py-3  bg-indigo-600 rounded-2xl">
          Professional səvyədə yüksəl
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
