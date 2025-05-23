import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdTransgender } from "react-icons/io";
import { PiCigaretteFill, PiForkKnifeFill } from "react-icons/pi";
import flatemate1 from "../../../Assets/flatemate1.png";
import flatemate2 from "../../../Assets/flatemate2.png";

const Flatemates = ({data}) => {
  return (
    <div className="flex flex-col gap-5 bg-white rounded-3xl p-5 h-[272px]">
      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Desired Flatmate Preference</p>
        <div className="grid  grid-cols-2 gap-4 gird-rows-2 ">
          <div className="inline-flex items-center justify-center  py-2 px-3 space-x-3 rounded-xl border-2 ">
            {" "}
            <IoMdTransgender /> <p className="">{data.Gender}</p>
          </div>

          <div className="inline-flex items-center justify-center  py-2 px-3 space-x-3 rounded-xl border-2 ">
            {" "}
            <PiForkKnifeFill /> <p className="">{data.Food}</p>
          </div>

          <div className="inline-flex items-center justify-center  py-2 px-3 space-x-3 rounded-xl border-2 ">
            {" "}
            <PiCigaretteFill /> <p className="">{data.Smoking}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Flatmates </p>
        <div className="inline-flex space-x-4">
          <img
            class="w-8 h-8 rounded-full"
            src={flatemate1}
            alt="Rounded avatar"
          ></img>
          <img
            class="w-8 h-8 rounded-full"
            src={flatemate2}
            alt="Rounded avatar"
          ></img>

          <img class="w-8 h-8 rounded-full bg-brand-logo" src="" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Flatemates;
