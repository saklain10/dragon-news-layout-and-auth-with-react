import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider'; // import with curly braces!

const Navbar = () => {
  const { user, logOut } = use(AuthContext); 
  const handleLogout = () =>{
    // console.log("user trying logout")
    logOut().then(() => {
      alert("Logout successfully")
    }).catch((error) => {
      // console.log(error)
    });
  }

  return (
    <div className='flex justify-between items-center'>
      <div>{user && user.email}</div>
      <div className='nav flex gap-5 items-center text-accent font-semibold'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className='login-btn flex gap-5'>
        <img className='w-12 rounded-full' src={`${user? user.photoURL:userIcon}`} alt="User Icon" />
        {
          user ? <button onClick={handleLogout} className='btn btn-primary px-8'>Log Out</button> : <Link to="/auth/login" className='btn btn-primary px-8'>
            Login
          </Link>
        }

      </div>
    </div>
  );
};

export default Navbar;
