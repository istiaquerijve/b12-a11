import React from 'react';
import { useForm } from 'react-hook-form';

const Registre = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const handleRegistration = (data) => {
        console.log("After register", data);
        
    }

    return (
        <div>
           <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-25 mb-25 mx-auto">
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", {required: true})} className="input" placeholder="Email" />
                    {
                        errors.email?.type === "required" && <p className='text-red-500'>Email is required</p>
                    }

                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", {required: true, minLength: 6, })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === "minLength" && <p className='text-red-500'>Password must be 6 characteres</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
                </div>
           </form>
        </div>
    );
};

export default Registre;