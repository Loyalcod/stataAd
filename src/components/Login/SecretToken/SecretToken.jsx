import { Link} from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function SecretToken() {
    const navigate = useNavigate()
    const [secretT, setSecretT] = useState("")


    const handleClick= (e)=>{
        e.preventDefault()
      if(!secretT){
        
      }else{
            navigate('/home')
      }
    }
  return (
    <>
        <div className="w-[100%] h-[100%] py-36 bg-white rounded flex flex-col">
                <div className=" mx-12 md:mx-20 py-1 my-2">
                    <h1 className="text-xl font-semibold text-[#6576ff]">STATA</h1>
                    <p className="text-sm font-semibold">Secret Token</p>
                    <p className="text-[8px] text-[#999999]">Please enter the Token sent to your email by STATA</p>
                </div>
            <form onSubmit={handleClick} className="w-full  flex-col flex">
                <div  className="mx-12 md:mx-20 py-1 mt-2 ">
                    <input value={secretT} onChange={(e)=>setSecretT(e.target.value)} className=" w-full border focus:ring-0 outline-none px-2 h-[30px] rounded" type="number"/>
                </div>
                <button type="submit" className=" mx-12 md:mx-20 mt-1 ">
                    <div className=" rounded flex justify-center items-center outline-none focus:ring-0 border h-[30px] bg-[#6576ff] text-white font-semibold text-xs">Submit</div>
                </button>
            </form>
                <Link to='#' className=" mx-12 md:mx-20 mt-1">
                    <h3 className="text-[10px] hover:text-black">Click on <span className="text-blue-600 text-xs font-semibold">'Send'</span> to receive a new code in your email.</h3>
                </Link>
                
            </div>
    </>
  )
}

export default SecretToken