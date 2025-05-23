import React from "react";
import map from "../../../Assets/map.png";

const Specification = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
      {/* Top Row - Full width */}
      <div className="md:col-span-4 bg-white rounded-3xl p-5">
        <div className="flex items-start gap-4">
          <img src={map} alt="Location map" className="h-16 w-16" />
          <div>
            <h2 className="text-xl font-bold">{data.title}</h2>
            <p className="text-gray-500">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="md:col-span-3 bg-white rounded-3xl p-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500">Accommodation Type</p>
            <p className="text-xl font-bold">{data.Accomodation}</p>
          </div>
          <div>
            <p className="text-gray-500">Room Type</p>
            <p className="text-xl font-bold">{data.Room}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 flex flex-col justify-center">
        <p className="text-gray-500">Availability</p>
        <p className="text-xl font-bold">{data.Availability}</p>
      </div>
    </div>
  );
};

export default Specification;