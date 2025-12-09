import React from 'react';
import Logo from '../../Component/Logo/Logo';

const Home = () => {
    return (
        <div>
           <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-20 mx-auto max-w-6/12 max-h-6/12 rounded-2xl mt-10 mb-10 items-center'>
              <div className="ml-40 mb-10"> <Logo /></div>
                <h1><i className='text-white ml-10'>Easy and fast loan facilities to help fulfill your dreams</i></h1>
                <div>
                    <button className='btn bg-green-400 text-white ml-40 mt-10'>Apply for Loan</button>
                </div>
                
            </div>
        </div>
    );
};

export default Home;