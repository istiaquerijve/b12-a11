import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Registre = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const {registerUsr} = useAuth();

    const handleRegistration = (data) => {
        // console.log("After register", data);
        registerUsr(data.email, data.password)
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.log(error);
            
        })
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
                    <input type="password" {...register("password", {required: true, minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
                     })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === "minLength" && <p className='text-red-500'>Password must be 6 characteres</p>
                    }
                     {
                        errors.password?.type === "pattern" && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                     <p>Have an account <Link className='text-primary' to="/login">LogIn</Link> </p>
                </div>
                 <SocialLogin/>
                </div>
               
           </form>
           
        </div>
    );
};

export default Registre;