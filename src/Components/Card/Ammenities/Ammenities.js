import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { LuDumbbell } from "react-icons/lu";

const Ammenities = () => {
  return (
    <div className="flex flex-col gap-5 bg-white rounded-3xl p-5 overflow-hidden">
      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Room Amenities</p>
        <div className="inline-flex space-x-4">
          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">AC</p>
          </span>

          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">Wardrobe</p>
          </span>

          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">Study table</p>
          </span>

          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">AC</p>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Flat Amenities</p>
        <div className="inline-flex space-x-4">
          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">RO</p>
          </span>

          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">TV</p>
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Social Amenities</p>
        <div className="inline-flex space-x-4">
          <span className="inline-flex items-center justify-center bg-brand-faded w-26 p-2  space-x-3 rounded-3xl">
            {" "}
            <LuDumbbell className="rotate-90 text-brand-logo" />{" "}
            <p className="w-28">Pool</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ammenities;
