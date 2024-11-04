import React from "react";
import PCimage from "./../../assets/pc-image.png";
import Wavinghand from "./../../assets/waving-hand.png";

function ContactHeader() {
  return (
    <div>
      <div className="flex px-10 py-[2px]">
        <div className="flex basis-[33vw]"></div>
        <div className="flex basis-[33vw]"></div>
        <ul className="flex gap-3 basis-[34vw] justify-end ">
          <a href="/">
            <li className="bg-[#b363f9] text-white m-2 px-3 py-1 text-lg font-semibold rounded-md">
              HOME
            </li>
          </a>
          <a href="#about">
            <li className="hover:bg-[#b363f9] text-white m-2 px-3 py-1 text-lg font-semibold rounded-md">
              ABOUT
            </li>
          </a>
          <a href="#skills">
            <li className="hover:bg-[#b363f9] text-white m-2 px-3 py-1 text-lg font-semibold rounded-md">
              SKILLS
            </li>
          </a>
          <a href="#projects">
            <li className="hover:bg-[#b363f9] text-white m-2 px-3 py-1 text-lg font-semibold rounded-md">
              PROJECTS
            </li>
          </a>
          <a href="#contact">
            <li className="bg-[white] text-black m-2 px-3 py-1 text-lg font-semibold rounded-md">
              CONTACT
            </li>
          </a>
        </ul>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 items-center">
            <img src={Wavinghand} className="h-[35px]" alt="waving_hand" />
            <h1 className="font-medium text-3xl text-white">Hi Everyone</h1>
          </div>
          <h1 className="font-medium text-3xl text-white">Adarsh Singh</h1>
          <h1 className="font-medium text-3xl text-yellow-500">Developer</h1>
        </div>
        <img src={PCimage} className="h-[500px]" alt="computer" />
      </div>
    </div>
  );
}

export default ContactHeader;
