import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

const Navbar = () => {
  const {user,signoutUser}=useContext(AuthContext)

    const links=<>
     <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            {
              user && <>
             <li><Link to='/orders'>Orders</Link></li> 
               <li><Link to='/profile'>Profile</Link></li> 
              </>
            }
    </>
    const handleSignOut=()=>{
      signoutUser()
      .then(()=>console.log('user sign out successfully'))
      .catch(()=>console.log('errro while signout'))
    }
  return (
   <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Auth Route</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="" className="btn">

      { user? <>
     <span> {user.email}</span>
     <a className="btn" onClick={handleSignOut}>Sign Out</a>
      </>:
      <Link to='/login'>Login</Link>
      }


    </a>
  

  </div>
</div>
  )
}

export default Navbar
