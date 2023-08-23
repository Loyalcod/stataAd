import LoginFrom from "../../components/Login/LoginForm/LoginFrom"
import RightAuthPageSide from "../../components/ritauthpage/RightAuthPageSide"
import TermsandConditions from "../../components/TermsandConditions/TermsandConditions"
import { Outlet } from "react-router-dom"

function Login() {
  return (
    <>
        <div className="p-1 w-[100%]">
            <div className="nk-body bg-white npc-general pg-auth">
                <div className="nk-app-root">
                    {/* <!-- main @s --> */}
                    <div className="nk-main ">
                        {/* <!-- wrap @s --> */}
                        <div className="nk-wrap nk-wrap-nosidebar">
                            {/* <!-- content @s --> */}
                            <div className="nk-content ">
                                <div className="nk-split nk-split-page nk-split-md">
                                    <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                                        <div className="absolute-top-right d-lg-none p-3 p-sm-5">
                                            <a href="#" className="toggle btn-white btn btn-icon btn-light" data-target="athPromo"><em className="icon ni ni-info"></em></a>
                                        </div>
                                        <div className="nk-block nk-block-middle nk-auth-body">
                                            <div className="brand-logo pb-5">
                                                <a href="html/index.html" className="logo-link">
                                                    {/* <img className="logo-light logo-img logo-img-lg" src="" srcset="" alt="logo"/> */}
                                                    {/* <img className="logo-dark logo-img logo-img-lg" src="" srcset="" alt="logo-dark"/> */}
                                                </a>
                                            </div>
                                            
                                            {/* <!-- .nk-block-head --> */}
                                            <Outlet/>
                                            {/* <!-- form --> */}
                                            
                                            
                                        </div>                           
                                        <TermsandConditions/>                            
                                    </div>                        
                                    <RightAuthPageSide/>
                        
                                </div>
                    
                            </div>
                
                        </div>

                    </div>
                    
                </div>


            </div>
        </div>
    </>
  )
}

export default Login