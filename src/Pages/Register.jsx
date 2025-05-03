import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState("")
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be at least 6 character");
            return;
        } else {
            setNameError("");

        }
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log({ name, photo, email, password })
        createUser(email, password).then(result => {
            const user = result.user;
            // console.log(user)
            updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({...user, displayName: name, photoURL: photo});
            })
            navigate("/")
                .catch((error) => {
                    console.log(error)
                    // An error occurred
                    // ...
                    setUser(user)
                });

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                alert(errorMessage)

            });

    }
    return (
        <div className='flex justify-center mt-3 items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Register your account</h1>
                <hr className='mx-4 text-gray-300' />
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-semibold">Name</label>
                        <input required name="name" type="text" className="input" placeholder="Your Name" />
                        {nameError && <p className='text-red-600 text-xs'>{nameError}</p>}
                        <label className="label font-semibold">Photo URL</label>
                        <input required name="photo" type="text" className="input" placeholder="Photo URL" />
                        <label className="label font-semibold">Email</label>
                        <input required name="email" type="email" className="input" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input required name="password" type="password" className="input" placeholder="Password" />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
                <p className='text-xs text-center pb-7'>Already Have an Account ? Please <Link className='text-secondary font-semibold hover:underline' to="/auth/login">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;