import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
           <Link to="/"><h1><i className='text-2xl'>loan<span className='text-green-400'>Link</span></i></h1></Link>
        </div>
    );
};

export default Logo;