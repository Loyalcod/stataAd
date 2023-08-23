import { useState } from "react"

function Home() {
    const [totals, setTotals]=useState([
        {totalName:'Total Users Card', totalNumber:10200344000},
        {totalName:'Total Sub cards', totalNumber:2000344000},
        {totalName:'Total Active Hosting Card', totalNumber:2000344000},
        {totalName:' Business Requests', totalNumber:2000344000},
    ])
  return (
    <>
        <div className="nk-content ">
                    <div className="container-fluid">
                        <div className="nk-content-inner">
                            <div className="nk-content-body">
                                <div className="nk-block-head nk-block-head-sm">
                                    <div className="nk-block-between">
                                        <div className="nk-block-head-content">
                                            <h3 className="nk-block-title page-title">STATA Dashboard</h3>
                                            <div className="nk-block-des text-soft">
                                                <p>Welcome to STATA Dashboard</p>
                                            </div>
                                        </div>
                                        {/* <!-- .nk-block-head-content --> */}
                                        <div className="nk-block-head-content">
                                            <div className="toggle-wrap nk-block-tools-toggle">
                                                <a href="#" className="btn btn-icon btn-trigger toggle-expand mr-n1" data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                                                <div className="toggle-expand-content" data-content="pageMenu">
                                                    <ul className="nk-block-tools g-3">
                                                        <li><a href="#" className="btn btn-white btn-dim btn-outline-primary"><em className="icon ni ni-download-cloud"></em><span>Export</span></a></li>
                                                        <li><a href="#" className="btn btn-white btn-dim btn-outline-primary"><em className="icon ni ni-reports"></em><span>Reports</span></a></li>
                                                        <li className="nk-block-tools-opt">
                                                            <div className="drodown">
                                                                <a href="#" className="dropdown-toggle btn btn-icon btn-primary" data-toggle="dropdown"><em className="icon ni ni-plus"></em></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <ul className="link-list-opt no-bdr">
                                                                        <li><a href="#"><em className="icon ni ni-user-add-fill"></em><span>Add User</span></a></li>
                                                                        <li><a href="#"><em className="icon ni ni-coin-alt-fill"></em><span>Add Order</span></a></li>
                                                                        <li><a href="#"><em className="icon ni ni-note-add-fill-c"></em><span>Add Page</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- .toggle-expand-content --> */}
                                            </div>
                                            {/* <!-- .toggle-wrap --> */}
                                        </div>
                                        {/* <!-- .nk-block-head-content --> */}
                                    </div>
                                    {/* <!-- .nk-block-between --> */}
                                </div>
                                {/* <!-- .nk-block-head --> */}
                                <div className="nk-block">
                                    <div className="row g-gs">  

                                        {totals.map((item, index)=>(
                                            <div className="col-md-3">
                                            <div className="card card-bordered card-full flex justify-center">
                                                <div className="card-inner">
                                                    <div className="card-title-group align-start mb-0">
                                                        <div className="card-title">
                                                            <h6 className="subtitle">{item.totalName}</h6>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="card-amount">
                                                        <span className="amount"> {item.totalNumber}</span>                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            {/* <!-- .card --> */}
                                        </div>
                                        ))}                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Home