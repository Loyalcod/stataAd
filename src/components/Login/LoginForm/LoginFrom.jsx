import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginFrom() {
  const [user, setUser]=useState("")
  const [password, setPassword] =useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(user.length === 0 || password.length === 0) {
      alert("empty")
    }{
      navigate('/choose_auth',{replace: true})
    }

  }

  return (
    <>
      <div className="nk-block-head">
          <div className="nk-block-head-content">
              <h5 className="nk-block-title text-xl font-semibold font-sans">Sign-In</h5>
              <div className="nk-block-des">
                <p className="text-xs font-extralight">Access the STATA panel using your Email & Passcode.</p>
              </div>
          </div>
      </div>
      <form onSubmit={handleSubmit} className="form-validate is-alter" autoComplete="off">
        <div className="form-group">
          
          <div className="">
            
            <input
              autoComplete="off"
              type="text"
              className="form-control placeholder:text-xs placeholder:font-light focus:ring-0 outline-none border"
              value={user}
              onChange={(e)=>setUser(e.target.value)}
              required
              id="email-address"
              placeholder="Enter your email address or username"
            />
          </div>
        </div>

        {/* <!-- .form-group --> */}
        <div className=" flex flex-col">
          <div className="">
            <input
              autoComplete="new-password"
              type="password"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              id="password"
              placeholder="Enter your passcode"
            />
          </div>
        </div>
        
        <button className="w-[100%] h-[40px] mt-2 flex justify-center font-light rounded-md bg-[#6576ff] border-none btn focus:ring-0 outline-non text-white">Sign In</button>
        <Link to='/forgot_password' className="text-[8px] text-blue-600">Forgot password?</Link>
      </form>

      <div className="form-note-s2 pt-4 text-[12px] text-red-500"> Don't Have an account? {" "}
      <Link to="/register" className="text-black">Create an account</Link>
      </div>
    </>
  );
}

export default LoginFrom;
