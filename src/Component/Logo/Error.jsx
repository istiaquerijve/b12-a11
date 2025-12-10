import React from 'react';
import error from "../../assets/error-404.png"
import { Link } from 'react-router';

const Error = () => {
    return (
         <div className='items-center justify-center mx-auto text-center'>
            <img className='items-center justify-center mx-auto ' src={error} alt="" />
            <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
            <p className='mt-3 text-gray-400'>The page you are looking for is not available.</p>
            <Link to="/"><a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-3">Go Back!</a></Link>
        </div>
    );
};

export default Error;