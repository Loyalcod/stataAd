import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CreateNewPassword() {
    const [password, setPassword]=useState("") 
    const [confirmpassword, setConfirmpassword] = useState("")  
    const navigate = useNavigate()
  
    const handleSubmit = async(e)=>{
      e.preventDefault()
      if(!(password === confirmpassword) || !password || !confirmpassword){
       alert("make sure password match")
      }else{
        navigate('/',{replace: true})
      }
  
    }
  return (
    <>
        <div className="nk-block-head">
            <div className="nk-block-head-content">
                <h5 className="nk-block-title text-xl font-semibold font-sans">Create New Password</h5>
                <div className="nk-block-des">
                  <p className="text-[10px] font-extralight">create a new password</p>
                </div>
            </div>
          </div>
        <form onSubmit={handleSubmit} className="form-validate is-alter" autoComplete="off">

        {/* <!-- .form-group --> */}    

        <div className=" flex py-3 flex-col">
          <div className="">
            <input
              autoComplete
              type="password"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              id="email-address"
              placeholder="new password"
            />
          </div>
        </div>

        <div className=" flex py-3 flex-col">
          <div className="">
            <input
              autoComplete
              type="password"
              className="form-control placeholder:text-xs placeholder:font-light  focus:ring-0 outline-none border"
              value={confirmpassword}
              onChange={(e)=>setConfirmpassword(e.target.value)}
              required
              id="password"
              placeholder="confirm password"
            />
          </div>
        </div>
        
        <button className="w-[100%] h-[40px] mt-2 flex justify-center font-light rounded-md bg-[#6576ff] border-none btn focus:ring-0 outline-non text-white">Submit</button>
        {/* <Link to='' className="text-[8px] text-blue-600">Didn't recieve the mail send again</Link> */}
      </form>
    </>
  )
}

export default CreateNewPassword