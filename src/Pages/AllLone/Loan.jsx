import React from 'react';
import { Link } from 'react-router';

const Loan = ({singleLone}) => {
    // console.log(singleLone);

    const {loanImage, loanTitle, loanCategory, interest, maxLoanLimit} = singleLone;
    
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={loanImage}
                    alt={loanTitle}
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{loanCategory}</h2>
                    <div className="flex gap-8">
                        <p>MaxLoanLimit:{maxLoanLimit}</p>
                        <p>interest:{interest}</p>
                    </div>
                    <div className="card-actions">
                   <Link to="/apply-loan"> <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Apply loan</button></Link>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Loan;