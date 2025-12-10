import React from 'react';

const Section2 = () => {
    return (
        <div className='mb-20'>
            <div className='flex justify-between gap-3 mt-3'>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>How long does it take to get a loan?</h1>
                    <p className='mt-2.5'>Initial approval is usually completed within 15–30 minutes.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>What documents are required?</h1>
                    <p className='mt-2.5'>NID/Passport, a photo, and income proof (if necessary).</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>What is the maximum loan amount I can get?</h1>
                    <p className='mt-2.5'>The limit varies depending on the type of loan.</p>
                </div>
                <div className='bg-gray-300 rounded-2xl p-8'>
                    <h1 className='mt-2.5 text-green-600'>How can I repay the installments?</h1>
                    <p className='mt-2.5'>You can repay through bKash/Nagad/bank transfer or Auto Debit.</p>
                </div>
            </div>
        </div>
    );
};

export default Section2;