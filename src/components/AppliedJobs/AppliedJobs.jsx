import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const { products } = useLoaderData();
  const { initialCart } = useLoaderData();
  console.log(initialCart);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-10">Applied Jobs</h1>
      <h2 className="text-xl mb-10 text-zinc-600 underline">
        {initialCart.length ? "Review Applied Jobs" : "Review is Empty"}
      </h2>
      <div className="mb-5">
        <button className="btn btn-primary bg-purple-500 py-2 px-3 rounded-lg hover:bg-purple-700 text-white font-semibold mr-3">
          Full-time
        </button>
        <button className="btn btn-primary bg-purple-500 py-2 px-3 rounded-lg hover:bg-purple-700 text-white font-semibold mr-3">
          Onsite
        </button>
        <button className="btn btn-primary bg-purple-500 py-2 px-3 rounded-lg hover:bg-purple-700 text-white font-semibold">
          Remote
        </button>
      </div>
      <div className="min-h-screen items-start text-gray-900">
        {initialCart.map((item) => (
          <AppliedJob key={item.i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
