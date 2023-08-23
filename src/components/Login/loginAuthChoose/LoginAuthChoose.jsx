import { Link } from "react-router-dom"

function LoginAuthChoose() {
  return (
    <>
        <div className="w-[100%] h-[100%] py-36 bg-white rounded flex flex-col">
                <div className=" mx-12 md:mx-20 py-1 my-2">
                    <h1 className="text-xl font-semibold text-[#6576ff]">STATA</h1>
                    <p className="text-sm font-semibold"> Account Verification Methods</p>
                    <p className="text-[8px] text-[#999999]">Choosing the Ideal Verification Option to Verify Your Account</p>
                </div>

                <Link to='/twoFA' className="mx-12 md:mx-20 py-1 my-2 border rounded">
                    <p className="mx-2 text-xs text-[#000] hover:text-[#999999]" >2FA Verification</p>
                </Link>
                <Link to='/secret_token' className=" mx-12 md:mx-20 py-1 my-2 border rounded">
                    <p className="mx-2 text-xs text-[#000] hover:text-[#999999]" >Secret Token Verification</p>
                </Link>
            </div>
    </>
  )
}

export default LoginAuthChoose