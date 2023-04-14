import React from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const { products } = useLoaderData();

  const { initialCart } = useLoaderData();
  console.log(initialCart);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-10">
        Applied Jobs {initialCart.length}
      </h1>
      <div className="min-h-screen items-start text-gray-900">
        {initialCart.map((item) => (
          <AppliedJob key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
