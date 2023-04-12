import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../../utils/fakedb";

const JobDetails = () => {
  let jobDetail = useParams();
  console.log(jobDetail);
  const jobs = useLoaderData();

  console.log(jobs);

  const [feature, setFeature] = useState({});

  useEffect(() => {
    const jobData = jobs.find((job) => job.id == jobDetail.id);
    setFeature(jobData);
  }, [jobDetail, jobs]);

const handleAppliedToCart = id => {
  console.log(id)
  addToDb(id)
}
  
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-10">Job Details</h1>
      <div className="grid grid-cols-2">
        <div className="text-left">
          <p className="mb-8">
            <span className="font-semibold">Job Description: </span>
            {feature.jobDescription}
          </p>
          <p className="mb-8">
            <span className="font-semibold">Job Responsibility: </span>
            {feature.responsibilities}
          </p>
          <p className="mb-8">
            <span className="font-semibold">Educational Requirements: </span>
            {feature.educationalRequirements}
          </p>
          <p className="mb-8">
            <span className="font-semibold">Experiences: </span>
            {feature.experiences}
          </p>
        </div>
        <div className="ml-10">
          <div className="bg-slate-200 p-6 text-left rounded-lg">
            <h3 className="text-xl font-semibold border-b border-red-800 pb-2">
              Job Details
            </h3>
            <h4 className="py-2 flex">
              <CurrencyDollarIcon className="h-6 w-6 text-slate-400 mr-2" />
              <span className="font-semibold"> Salary : </span>
              <span>{feature.salary} Per Month</span>
            </h4>
            <h3 className="py-2 flex">
              <CalendarDaysIcon className="h-6 w-6 text-slate-400 mr-2" />
              <span className="font-semibold">Job Title : </span>
              {feature.jobTitle}
            </h3>
            <h3 className="text-xl font-semibold border-b border-red-800 pb-2">
              Contact Information
            </h3>
            <h4 className="py-2 flex">
              <PhoneIcon className="h-6 w-6 text-slate-400 mr-2" />
              <span className="font-semibold"> Phone : </span> {feature.phone}
            </h4>
            <h4 className="py-2 flex">
              <EnvelopeIcon className="h-6 w-6 text-slate-400 mr-2" />
              <span className="font-semibold"> Email : </span> {feature.email}
            </h4>
            <h4 className="py-2 flex">
              <MapPinIcon className="h-6 w-6 text-slate-400 mr-2" />
              <span className="font-semibold"> Address : </span>
              {feature.location}
            </h4>
          </div>
          <button onClick={handleAppliedToCart} className="btn btn-primary bg-purple-500 py-3 rounded-lg hover:bg-purple-700 mt-6 text-white font-semibold w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
