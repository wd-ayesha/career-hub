import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJob = ({ item }) => {
  const {
    id,
    logo,
    jobTitle,
    companyName,
    location,
    salary,
    remoteOrOnsite,
    fullOrPartTime,
  } = item;

  return (
    <div>
      <div className="border rounded p-5 text-left flex justify-between">
        <div className="flex justify-center items-center">
          <div className="mr-10">
            <img className="bg-purple-100 py-16 px-5 rounded-lg" src={logo} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold py-3">{jobTitle}</h3>
            <h4 className="text-xl pb-4">{companyName}</h4>
            <span className="py-2 px-3 rounded border border-sky-700 text-sky-700 mr-4">
              {remoteOrOnsite}
            </span>
            <span className="py-2 px-3 rounded  border border-sky-700 text-sky-700">
              {fullOrPartTime}
            </span>
            <div className="flex justify-between items-center py-3">
              <p className="flex">
                <MapPinIcon className="h-6 w-6 text-slate-300" /> {location}
              </p>
              <p className="flex">
                <CurrencyDollarIcon className="h-6 w-6 text-slate-300" />
                {salary}
              </p>
            </div>
          </div>
        </div>
        <Link to={`/job/ ${id}`}>
          <button className="btn btn-primary bg-purple-500 py-2 px-3 rounded-lg hover:bg-purple-700 text-white font-semibold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
