import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TeacherPhoto from "./assets/clip-art-teachers.png";
import StarPhoto from "./assets/star.png";
import PeoplePhoto from "./assets/people.png";
import LevelPhoto from "./assets/level.png";
import Photo from "./assets/2.jpg";
import GirlFace from "./assets/Girl-Face.png";
import BoyFace01 from "./assets/Boy-Face01.png";
import BoyFace02 from "./assets/Boy-Face02.png";

import { BsPlusCircle, BsThreeDots } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { GrDownload } from "react-icons/gr";
import { FiEye } from "react-icons/fi";
import Chat from "./components/Chat";
import TopSideBar from "./components/TopSideBar";

function App() {
  // const [isSidebar, setIsSidebar] = useState(false);

  // useEffect(() => {
  //   fetchText();
  // }, []);

  // async function fetchText() {
  //   let response = await fetch("https://97mm2.sse.codesandbox.io/teachers/");
  //   let data = await response.text();
  //   console.log(data);
  // }

  const AvailabilityItem = ({ url, count, text }) => (
    <div className="w-2/5 flex flex-col items-center justify-center p-1 bg-slate-100 rounded-lg cursor-pointer transition-all duration-500 hover:w-2/4">
      <img src={url} alt="StarPhoto" className="w-2/5 " />
      <p className="text-sm font-bold">{count}</p>
      <span className="text-xs text-slate-400">{text}</span>
    </div>
  );

  const CourseMaterialsItem = ({ row, text, rowColor, Icon }) => (
    <div className="flex items-center justify-between bg-slate-100 p-2 my-2 rounded-md">
      <div className="flex items-center gap-x-1">
        <p
          className={`w-7 h-7 ${rowColor} text-white flex items-center justify-center rounded-lg`}
        >
          {row}
        </p>
        <h2 className="cursor-pointer  hover:underline">{text}</h2>
      </div>
      <Icon className="cursor-pointer" />
    </div>
  );
  const Studentİtem = ({ UserName, profilePhoto }) => (
    <div className="flex items-center justify-between bg-slate-100 p-2 my-2 rounded-md">
      <div className="flex items-center gap-x-1">
        <img src={profilePhoto} alt="profile photo" className="w-8" />
        <h2 className="cursor-pointer   hover :underline">{UserName}</h2>
      </div>
      <BsPlusCircle className="cursor-pointer" />
    </div>
  );

  return (
    <div className="w-full h-full flex">
      <TopSideBar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
      <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />

      <div className="flex-1 flex flex-col mt-12 xl:mt-0 xl:ml-60 ">
        <div className="mx-auto mt-6 flex gap-8">
          <div className="flex flex-col w-80">
            <div className="w-full flex items-center justify-between px-3 py-2 bg-slate-100 rounded-xl">
              <div className="flex items-center gap-x-1">
                <img src={TeacherPhoto} alt="teacher" className="w-12" />
                <div className="flex flex-col justify-center">
                  <p className="text-md font-semibold cursor-pointer hover:underline">
                    Gülşən Umud
                  </p>
                  <span className="text-xs text-slate-400">Müəllim</span>
                </div>
              </div>
              <BsPlusCircle className="font-bold text-lg w-7 h-7 p-1 rounded  bg-slate-200 cursor-pointer" />
            </div>
            <div className="w-full my-6">
              <h1 className="text-base font-bold mb-3">
                Müəllim haqqında məlumat
              </h1>
              <p className="text-sm">
                Oğlan oxutmaqla, savaadlı insan əldə edərsən, qiza təhsil
                verməklə isə savadlı aliə əldə edərsən. Bir ölkənin gələcəyi
                onun təhsilindən aslıdır. Bir söz var əgər bir milləti məhv
                etmək istəyirsənsə onun tibbini və təhsilini məhv et.
              </p>
            </div>
            <div className="w-full">
              <div className=" flex items-center justify-between">
                <h1 className="text-base text-slate-400">
                  <strong className="text-black"> Kurs</strong> Naliliyyətləri
                </h1>
                <BsThreeDots className="text-lg transition-colors duration-300 cursor-pointer text-slate-400 hover:text-black" />
              </div>

              <div className="flex gap-x-1 mt-3">
                <AvailabilityItem url={StarPhoto} count={"4/5"} text={"xal"} />
                <AvailabilityItem
                  url={PeoplePhoto}
                  count={"120"}
                  text={"nəfər"}
                />
                <AvailabilityItem
                  url={LevelPhoto}
                  count={"İlkin"}
                  text={"səviyyə"}
                />
              </div>
            </div>
          </div>
          <img src={Photo} alt="Photo" className="mx-auto" />
        </div>
        <div className="flex gap-x-10 mx-auto">
          <div className="w-72 ">
            <div className="flex items-center justify-between">
              <h1 className="text-base">
                <strong>Kursun</strong>
                <span className="text-slate-400 "> materialları</span>
              </h1>
              <div className="flex items-center justify-center gap-x-1 border rounded-lg p-1 text-xs">
                <GoClock className=" text-red-900 text-sm" /> 90 dəq
              </div>
            </div>
            <div>
              <CourseMaterialsItem
                row={1}
                text={"Sillabus"}
                Icon={GrDownload}
                rowColor={"bg-green-700"}
              />
              <CourseMaterialsItem
                row={2}
                text={"Dərs materialı"}
                Icon={BsPlusCircle}
                rowColor={"bg-orange-600"}
              />
              <CourseMaterialsItem
                row={3}
                text={"Proyekt"}
                Icon={BsPlusCircle}
                rowColor={"bg-black"}
              />
            </div>
          </div>
          <Chat />
          <div className="w-72 ">
            <div className="flex items-center justify-between">
              <h1 className="text-base">
                <strong>Tələbələr</strong>
              </h1>
              <div className="flex items-center justify-center gap-x-1 border rounded-lg p-1 text-xs !text-white bg-red-600">
                <p>Canlı </p>
                <FiEye className="text-sm" />
                <span>86</span>
              </div>
            </div>
            <div>
              <Studentİtem
                UserName={"Leila Abbasova"}
                profilePhoto={GirlFace}
              />
              <Studentİtem
                UserName={"Əli Hüseyinov"}
                profilePhoto={BoyFace01}
              />
              <Studentİtem
                UserName={"Məhhəmməd Ali"}
                profilePhoto={BoyFace02}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
