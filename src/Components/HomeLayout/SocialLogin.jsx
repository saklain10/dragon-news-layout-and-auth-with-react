import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-4'>Login With</h2>
            <div className=' flex flex-col gap-2'>
                <button className='btn btn-secondary btn-outline w-full text-xs h-12'>< FcGoogle size={24} />
                 Login With Google</button>
                <button className='btn btn-primary btn-outline w-full text-xs h-12'><FaGithub size={24} />
                Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;