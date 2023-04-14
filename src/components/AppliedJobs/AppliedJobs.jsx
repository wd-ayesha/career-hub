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

      <div className="min-h-screen items-start text-gray-900">
        {initialCart.map((item) => (
          <AppliedJob key={item.i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
