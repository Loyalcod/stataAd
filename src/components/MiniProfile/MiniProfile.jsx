

function MiniProfile() {
  return (
    <>
        {/* this is the head in admin dashboard */}
        <li className="dropdown user-dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <div className="user-toggle">
                                                <div className="user-avatar sm">
                                                    <em className="icon ni ni-user-alt"></em>
                                                </div>
                                                <div className="user-info d-none d-md-block">
                                                    <div className="user-status">Administrator</div>
                                                    <div className="user-name dropdown-indicator">Mr. John</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>AB</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text">Mr. John Docker</span>
                                                        <span className="sub-text">john@example.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="html/user-profile-regular.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                    <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li>
                                                    <li><a href="html/user-profile-activity.html"><em className="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li>
                                                    <li><a className="dark-switch" href="#"><em className="icon ni ni-moon"></em><span>Dark Mode</span></a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
    </>
  )
}

export default MiniProfile