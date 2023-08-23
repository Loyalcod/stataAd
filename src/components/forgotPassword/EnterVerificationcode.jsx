import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function EnterVerificationcode() {
    const [verifyCode, setVerifyCode]=useState("")   
    const navigate = useNavigate()
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      if(!verifyCode) {
        alert("empty")
      }{
        navigate('/new_passcode',{replace: true})
      }
  
    }
  return (
    <>
        <div className="nk-block-head">
            <div className="nk-block-head-content">
                <h5 className="nk-block-title text-xl font-semibold font-sans">Recover password</h5>
                <div className="nk-block-des">
                  <p className="text-[10px] font-extralight">Enter the code sent to your mail</p>
                </div>
            </div>
          </div>
        <form onSubmit={handleSubmit} className="form-validate is-alter" autoComplete="off">

        {/* <!-- .form-group --> */}    

        <div className=" flex py-3 flex-col">
          <div className="">
            <input
              type="number"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={verifyCode}
              onChange={(e)=>setVerifyCode(e.target.value)}
              required
              id="email-address"
              placeholder="xxx-xxx"
            />
          </div>
        </div>
        
        <button className="w-[100%] h-[40px] mt-2 flex justify-center font-light rounded-md bg-[#6576ff] border-none btn focus:ring-0 outline-non text-white">Submit</button>
        <Link to='/enter_code' className="text-[8px] text-blue-600">Didn't recieve the mail send again</Link>
      </form>
    </>
  )
}

export default EnterVerificationcode