import { Link } from "react-router-dom"

function TwoFA() {
  return (
    <>
        <div className="w-[100%] h-[100%] py-36 bg-white rounded flex flex-col">
                <div className=" mx-12 md:mx-20 py-1 my-2">
                    <h1 className="text-xl font-semibold text-[#6576ff]">STATA</h1>
                    <p className="text-sm font-semibold"> 2FA Verification</p>
                    <p className="text-[8px] text-[#999999]">Please enter the verification code sent to your email by STATA</p>
                </div>

                <div to='/twoFA' className="mx-12 md:mx-20 py-1 mt-2 ">
                    <input className=" w-full border focus:ring-0 outline-none px-2 h-[30px] rounded" type="number"/>
                </div>
                <Link to='#' className=" mx-12 md:mx-20 mt-1">
                    <div className=" rounded flex justify-center items-center outline-none focus:ring-0 border h-[30px] bg-[#6576ff] text-white font-semibold text-xs">Submit</div>
                </Link>
                <Link to='#' className=" mx-12 md:mx-20 mt-1">
                    <h3 className="text-[10px] hover:text-black">If the verification code has expired, please click on <span className="text-blue-600 text-xs font-semibold">'Send'</span> to receive a new code in your email.</h3>
                </Link>
                
            </div>
    </>
  )
}

export default TwoFA