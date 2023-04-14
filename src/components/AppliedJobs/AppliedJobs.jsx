import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';


const AppliedJobs = () => {
    const {products} = useLoaderData();
    // console.log(products)
    
    return (
        <div>
        <h1 className='font-semibold text-2xl mb-10'>Applied Jobs</h1>
          <div className='min-h-screen items-start text-gray-900'>

          {products.map((item) => (
  <AppliedJob key={item} item={item} />
))}
        </div>
      </div>
    );
};

export default AppliedJobs;