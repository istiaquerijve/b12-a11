import React from 'react';
import Logo from '../../Component/Logo/Logo';
import Section2 from './Section2';
import Section1 from './Section1';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            <Section1/>
           <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-20 mx-auto max-w-6/12 max-h-6/12 rounded-2xl mt-10 mb-10 items-center'>
              <div className="ml-40 mb-10"> <Logo /></div>
                <h1><i className='text-white ml-10'>Easy and fast loan facilities to help fulfill your dreams</i></h1>
                <div>
                    <Link to="/all-loan"><button className='btn bg-green-400 text-white ml-40 mt-10'>Apply for Loan</button></Link>
                </div>
               
            </div>
             <Section2/>
        </div>
    );
};

export default Home;