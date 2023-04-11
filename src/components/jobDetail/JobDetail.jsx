import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetail = () => {
    // const jobDetail = useParams()
    // console.log(jobDetail);
    // const jobs = useLoaderData()
    // console.log(jobs)

   let {id}= useParams()
   const [detail, setDetail] = useState([]);

    // const [detail, setDetail] = useState([]);

  /*   useEffect( () => {
        fetch('/featuredJobs.json')
        .then(res => res.json())
        .then(data => {
            const detailData = data.find(detail => detail.id === id);
           let mydata =[]
        //    setDetail(detailData)
            if (detailData){
                mydata.push(detailData)
            }
        })
    }, []) */
    
    return (
        <div>
            <h1 className='font-semibold text-2xl'>Job Details</h1>
            <div>
                <div className=''>
              {/*   {
                    mydata.map(detail => <JobDetail></JobDetail>)
                } */}
                </div>
                <div className=''>
                    <h3>Job Details</h3>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;