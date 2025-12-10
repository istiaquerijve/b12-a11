import React from 'react';

const Section1 = () => {
    return (
        <div className='mb-20 mt-20'>
            <h1 className='text-center mb-10 text-3xl text-green-400'>Why Choose Us?</h1>
            <div className='flex justify-between gap-3 mt-3'>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>Fast Approval Process</h1>
                    <p className='mt-2.5'>Your application is verified within minutes.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>Transparent Charges & Interest Rates</h1>
                    <p className='mt-2.5'>No hidden fees.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>Minimal Documentation</h1>
                    <p className='mt-2.5'>Simple and hassle-free process.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>24/7 Support</h1>
                    <p className='mt-2.5'>Assistance whenever you need it.</p>
                </div>
            </div>
        </div>
    );
};

export default Section1;