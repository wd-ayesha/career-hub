import React from 'react';
import './Home.css'

const Home = () => {
    return (
     <div className='sm:flex justify-between items-center home'>
           <div className='pt-10 text-left'>
           <h1 className='font-bold text-7xl'>One Step <br /> Closer To Your <br /> <span className='text-purple-400'>Dream Job</span></h1>
           <p className='py-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
           <button className="btn btn-primary bg-blue-500 py-2 px-3 rounded-lg hover:bg-blue-700 text-white font-semibold">
           Get Started
            </button>
        </div>
        <div className='w-96'>
            <img src="https://i.ibb.co/YBQTbKV/P3-OLGJ1-copy-1.png" alt="" />
        </div>
     </div>
    );
};

export default Home;