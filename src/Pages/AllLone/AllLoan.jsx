import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Loan from './Loan';

const AllLoan = () => {
    const data = useLoaderData();
    // console.log(data);
    
    return (
        <div className='mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                {
                    data.map((singleLone) => <Loan key={singleLone.id} singleLone={singleLone}></Loan>)
                }
            </Suspense>
        </div>
    );
};

export default AllLoan;