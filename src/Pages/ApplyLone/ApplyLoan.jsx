import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const ApplyLoan = () => {

    const {
            register,
            handleSubmit,
            formState: { errors }
        } = useForm();

        const {user} = useAuth();

    const handleApply = () => {
        // console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be aggry!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Apply!"
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Applyed!",
                // text: "Your loan was applyed.",
                icon: "success"
                });
            }
            });
        
    }

    return (

        <div className='mt-20 mb-20'>
           <form onSubmit={handleSubmit(handleApply)}>
            <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl mx-auto w-8/12">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", {required: true})}
                    defaultValue={user?.email}
                    className="input" placeholder="Email" />
                     {errors.email?.type === "required" && <p className='text-red-500'>Required</p>}
                        {/* fitst name */}
                    <label className="label">First name</label>
                    <input type="text" {...register("first-name", {required: true})} className="input" placeholder="First Name" />
                    
                        {/* last name */}
                    <label className="label">Last Name</label>
                    <input type="text" {...register("last-name", {required: true})} className="input" placeholder="Last Name" />
                    
                        {/* loan tital */}
                    <label className="label">Loan Tital</label>
                    <input type="text" {...register("loanTital", {required: true})} 
                    className="input" placeholder="Loan tital" />
                        {/* Interest Rate */}
                    <label className="label">Interest Rate</label>
                    <input type="number" {...register("interest-rate", {required: true})} className="input" placeholder="Interest Rate" />
                        {/* Contact Number */}
                    <label className="label">Contact Number</label>
                    <input type="number" {...register("contact-numbre", {required: true})} className="input" placeholder="Contact Number" />
                        {/* National ID */}
                    <label className="label">National ID</label>
                    <input type="number" {...register("nid", {required: true})} className="input" placeholder="National ID" />
                        {/* Income Source */}
                    <label className="label">Income Source</label>
                    <input type="text" {...register("income-source", {required: true})} className="input" placeholder="Income Source" />
                        {/* Monthly Income */}
                    <label className="label">Monthly Income</label>
                    <input type="number" {...register("monthly-income", {required: true})} className="input" placeholder="Monthly Income" />
                        {/* Loan Amount */}
                    <label className="label">Loan Amount</label>
                    <input type="number" {...register("l-amo", {required: true})} className="input" placeholder="Loan Amount" />
                        {/* Reason for Loan */}
                    <label className="label">Reason for Loan</label>
                    <input type="text" {...register("rea", {required: true})} className="input" placeholder="Reason for Loan" />
                        {/* Address */}
                    <label className="label">Address</label>
                    <input type="text" {...register("address", {required: true})} className="input" placeholder="Address" />
                   
                    {/* button */}
                     <button className="btn btn-neutral mt-4">Apply</button>
                    </fieldset>
                </div>
                </div>
           </form>
        </div>
    );
};

export default ApplyLoan;