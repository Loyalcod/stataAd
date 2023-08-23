import { Link, Outlet } from "react-router-dom"
import promo_a from '../../../images/slides/promo-a.png'
import promo_ad from '../../../images/slides/promo-a2x.png'

function LoginAuth() {
  return (
    <>
        <section className="flex h-screen">
            <div className="w-[100%] md:w-[50%]">
            <section className="w-[100%] h-[100%] bg-[#f5f6fa] flex items-center">
                <Outlet/>
            </section>
            </div>
            <div className="w-[50%] hidden md:flex">
            <div className="nk-split-content hidden md:flex nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
                            <div className="w-100 w-max-550px p-3 p-sm-5 m-auto">
                                <div className="nk-feature nk-feature-center">
                                    <div className="nk-feature-img">
                                        <img className="round" src={promo_a} srcSet={`${promo_ad} 2x`} alt=""/>
                                    </div>
                                    <div className="nk-feature-content py-4 p-sm-5">
                                        <h4>STATA</h4>
                                        <p>You can start to create your products easily with its user-friendly design & most completed responsive layout.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </section>
    </>
  )
}

export default LoginAuth

{/*  */}