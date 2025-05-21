import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const Signup = () => {
  const navigate=useNavigate()
  const {createUser}=useContext(AuthContext)
  const handleSignup=e=>{
    e.preventDefault()
    const name=e.target.name.value;
     const email=e.target.email.value;
    const password=e.target.password.value
    //
    createUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(error=>console.log(error))
  }

  return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Signup  now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignup}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="username" name='username'
           className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'
           className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"
          name="password"
           required />
         
        </div>
        <div className="form-control mt-6">
          <button  
   
          className="btn btn-primary rounded-lg">Signup</button>
        </div>
      </form>
      <p className="mb-4 ml-4">
        Already  have an account?
        <Link className='p-2 m-2 bg-blue-500 rounded-lg' to='/login'>Login</Link>
      </p>
    </div>
  </div>
</div>
  )
}

export default Signup
