import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [email, setEmail]=useState("")
    const [password, setPassword] =useState("")
    const [fullname, setFullname] = useState("")
    const navigate = useNavigate()
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      if(!email || !password || !fullname) {
        alert("empty")
      }{
        navigate('/choose_auth',{replace: true})
      }
  
    }
  return (
    <>
 <div className="nk-block-head">
            <div className="nk-block-head-content">
                <h5 className="nk-block-title text-xl font-semibold font-sans">Sign-Up</h5>
                <div className="nk-block-des">
                  <p className="text-[10px] font-extralight">Welcome! We're thrilled to have you here. Sign up now to join our community!</p>
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
              value={fullname}
              onChange={(e)=>setFullname(e.target.value)}
              required
              id="fullname"
              placeholder="Enter your fullname"
            />
          </div>
        </div>

        {/* <!-- .form-group --> */}
        <div className=" flex flex-col">
          <div className="">
            <input
              autoComplete="new-password"
              type="email"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              id="email-address"
              placeholder="Enter email address"
            />
          </div>
        </div>

        <div className=" flex py-3 flex-col">
          <div className="">
            <input
              autoComplete
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
        <Link to='/' className="text-[8px] text-blue-600">Already have an account?</Link>
      </form>
    </>
  )
}

export default Register