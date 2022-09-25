import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import TeacherPhoto from "../assets/clip-art-teachers.png";
import BoyFace02 from "../assets/Boy-Face02.png";

function Chat() {
  return (
    <div className="w-80">
      <div className="w-full mb-2 flex items-center justify-between">
        <h1>
          <strong>Canlı</strong> <span className="text-slate-400">söhbət</span>
        </h1>
        <BsArrowsFullscreen className="cursor-pointer" />
      </div>
      <div className="flex flex-col  w-full h-80 bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <div className="flex-shrink-0 h-10 w-10 rounded-full">
              <img src={BoyFace02} alt="teacher" className="w-12" />
            </div>
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
            <div className="flex-shrink-0 h-10 w-10 rounded-full ">
              <img src={TeacherPhoto} alt="teacher" className="w-12" />
            </div>
          </div>
        </div>

        <div className="bg-gray-300 p-2">
          <input
            className="flex items-center h-8 w-full rounded px-1 text-xs !outline-none"
            type="text"
            placeholder="Type your message…"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
