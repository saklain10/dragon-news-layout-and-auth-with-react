import React, { use, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';


const Login = () => {
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const { signIn } = use(AuthContext);
    const location = useLocation()
    // console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)

        signIn(email, password).then((result) => {
            const user = result.user;
            // console.log(user)
            navigate(`${location.state ? location.state : "/"}`)

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                // alert(errorCode,errorMessage)
                setError(errorCode)

            });
    }
    // const handleLlogin = () => {
    //     navigate('/');
    //   };
    return (
        <div className='flex justify-center mt-3 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Login your account</h1>
                <hr className='mx-4 text-gray-300' />
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label font-semibold">Email</label>
                        <input required name="email" type="email" className="input" placeholder="Email" />
                        {/* password */}
                        <label className="label font-semibold">Password</label>
                        <input required name="password" type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        { 
                            error && <p className='text-red-600'>{error}</p>
                        }

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        {/* onClick={handleLlogin} */}
                    </fieldset>
                </form>
                <p className='text-xs text-center pb-7'>Don’t Have An Account ? Please <Link className='text-secondary font-semibold hover:underline' to="/auth/register">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;