import React, { useState } from "react";
import { UserAuth } from "../contextAPI/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {user,signIn}=UserAuth();
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("");
        try{
            await signIn(email,password);
            navigate("/");
        }catch(error){
            setError(error.message);
        }
    }
    return(
        <div className="w-full h-screen">
            <img
                className='hidden sm:block absolute w-full h-full object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                alt='/'
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="w-full mx-auto py-12 px-4 z-50 fixed">
                <div className="max-w-[450px] h-[450px] mx-auto text-white bg-black/75">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Login Here...</h1>
                        {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rouded'
                                type='email'
                                placeholder='Email'
                                
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-3 my-2 bg-gray-700 rouded'
                                type='password'
                                placeholder='Password'
                               
                            />
                            <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                                Sign In
                            </button>
                            <p className='py-8'>
                            <span className='text-gray-600'>New to Netflix?</span>{' '}
                            <Link to='/signup'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;