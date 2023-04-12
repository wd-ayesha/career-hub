import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
  let jobDetail = useParams()
  console.log(jobDetail);
    const jobs = useLoaderData()

    console.log(jobs)

   const [feature, setFeature] = useState({});

   useEffect( () => {
    const jobData =  jobs.find(job => job.id == jobDetail.id);
    setFeature(jobData)
   }, [jobDetail, jobs])

    return (
        <div>
            <h1 className='font-semibold text-2xl'>Job Details</h1>
            <div>
                {
                   
                }

            </div>
        </div>
    );
};

export default JobDetails;



    /* const { jobId } = useParams();
    const jobsData = useLoaderData();

    const [jobDetail, setJobDetail] = useState({});

    useEffect( () => {
        const job = jobsData.find((job) => job.id === jobId);
        console.log(job);

    }, [jobId, jobsData]); */

 /*    if(!jobDetail){
        return <div>Loading...</div>
    } */