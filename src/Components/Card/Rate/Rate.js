import React from "react";
import { CiCircleInfo } from "react-icons/ci";

const Rate = ({data}) => {
  return (
    <div className="flex flex-col gap-5 bg-white rounded-3xl p-5 h-[272px]">
      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Rent</p>
        <p className=" text-xl font-bold">{data.Rent}</p>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-md text-gray-500">Security Deposit </p>
        <p className=" text-xl font-bold">{data.Security}</p>
      </div>
      <div className="w-full flex flex-col">
        <span className="inline-flex  space-x-2">
          <p className="text-md text-gray-500">Extra</p>{" "}
          <CiCircleInfo className="mt-1" />
        </span>
        <p className=" text-xl font-bold">{data.Extra}</p>
      </div>
    </div>
  );
};

export default Rate;
