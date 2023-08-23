import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail]=useState("")   
    const navigate = useNavigate()
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      if(!email) {
        alert("empty")
      }{
        navigate('/enter_code',{replace: true})
      }
  
    }
  return (
    <>
        <div className="nk-block-head">
            <div className="nk-block-head-content">
                <h5 className="nk-block-title text-xl font-semibold font-sans">Forgot Password?</h5>
                <div className="nk-block-des">
                  <p className="text-[10px] font-extralight">Please check your spam inbox. Our messages end up in there sometimes.</p>
                </div>
            </div>
          </div>
        <form onSubmit={handleSubmit} className="form-validate is-alter" autoComplete="off">

        {/* <!-- .form-group --> */}    

        <div className=" flex py-3 flex-col">
          <div className="">
            <input
              autoComplete
              type="email"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              id="email-address"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        
        <button className="w-[100%] h-[40px] mt-2 flex justify-center font-light rounded-md bg-[#6576ff] border-none btn focus:ring-0 outline-non text-white">Submit</button>
        {/* <Link to='/' className="text-[8px] text-blue-600">Already have an account?</Link> */}
      </form>
    </>
  )
}

export default ForgotPassword