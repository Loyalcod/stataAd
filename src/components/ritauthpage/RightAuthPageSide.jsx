
import promo_a from '../../images/slides/promo-a.png'
import promo_b from '../../images/slides/promo-b.png'
import promo_c from '../../images/slides/promo-c.png'

import promo_adx from '../../images/slides/promo-a2x.png'
import promo_abx from '../../images/slides/promo-b2x.png'
import promo_acx from '../../images/slides/promo-c2x.png'

function RightAuthPageSide() {
    
  return (
    <>
        <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right" data-content="athPromo" data-toggle-screen="lg" data-toggle-overlay="true">
                            <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                                <div className="slider-init" data-slick='{"dots":true, "arrows":false}'>
                                    
                                    {/* <!-- .slider-item --> */}
                                    
                                    <div className="slider-item">
                                        <div className="nk-feature nk-feature-center">
                                            <div className="nk-feature-img flex justify-center">
                                                <img className="round w-[100%] h-[100%]" src={promo_a} srcSet={`${promo_abx} 2x`}  alt="" />
                                            </div>
                                            <div className="nk-feature-content py-4 p-sm-5">
                                                <h4>STATA</h4>
                                                <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet laboriosam officiis dolor iste! Officia neque distinctio omnis amet quis!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="nk-feature nk-feature-center">
                                            <div className="nk-feature-img flex justify-center">
                                                <img className="round w-[100%] h-[100%]" src={promo_b} srcSet={`${promo_abx} 2x`}  alt="" />
                                            </div>
                                            <div className="nk-feature-content py-4 p-sm-5">
                                                <h4>STATA</h4>
                                                <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum asperiores perspiciatis neque iure. Iusto magni quisquam ut ratione nesciunt explicabo.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="nk-feature nk-feature-center">
                                            <div className="nk-feature-img flex justify-center">
                                                <img className="round w-[100%] h-[100%]" src={`${promo_c}`} srcSet={`${promo_acx} 2x`}  alt="" />
                                            </div>
                                            <div className="nk-feature-content py-4 p-sm-5">
                                                <h4>STATA</h4>
                                                <p className="text-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum sit error neque dolorem consequatur autem reiciendis nemo ipsa repellendus!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- .slider-item --> */}
                                    
                                    
                        
                                </div>
                                {/* <!-- .slider-init --> */}
                                <div className="slider-dots"></div>
                                <div className="slider-arrows"></div>
                            </div>
                
                        </div>
    </>
  )
}

export default RightAuthPageSide