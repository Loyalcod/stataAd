import React from "react";
import LangSelect from "../../components/LangSelect/LangSelect";
import MiniProfile from "../../components/MiniProfile/MiniProfile";
import NotificationList from "../../components/notification/NotificationList";
import CountrySelect from "../../components/country/CountrySelect";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
        <div className="nk-body bg-lighter npc-general has-sidebar ">
    <div className="nk-app-root">
        {/* <!-- main @s --> */}
        <div className="nk-main ">
            {/* <!-- sidebar @s --> */}
            <div className="nk-sidebar nk-sidebar-fixed is-dark " data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-menu-trigger">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em className="icon ni ni-arrow-left"></em></a>
                        <a href="#" className="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                    </div>
                    <div className="nk-sidebar-brand">
                        <a href="html/index.html" className="logo-link nk-sidebar-logo">
                            <h1 className="text-white font-[poppins] text-xl">STATA</h1>
                        </a>
                    </div>
                </div>
                {/* <!-- .nk-sidebar-element --> */}
                <div className="nk-sidebar-element nk-sidebar-body">
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-menu" data-simplebar>
                            <ul className="nk-menu">
                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title text-primary-alt">Dashboards</h6>
                                </li>
                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-item">
                                    <a href="html/index.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-dashlite"></em></span>
                                        <span className="nk-menu-text">Home</span>
                                    </a>
                                </li>
                                <li className="nk-menu-item has-sub">
                                    <a href="#" className="nk-menu-link nk-menu-toggle">
                                        <span className="nk-menu-icon"><em className="icon ni ni-tile-thumb"></em></span>
                                        <span className="nk-menu-text">All Businesses</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/project-card.html" className="nk-menu-link"><span className="nk-menu-text">Add Businesses</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/project-list.html" className="nk-menu-link"><span className="nk-menu-text">View Businesses</span></a>
                                        </li>
                                    </ul>
                                    {/* <!-- .nk-menu-sub --> */}
                                </li>
                                <li className="nk-menu-item has-sub">
                                    <a href="#" className="nk-menu-link nk-menu-toggle">
                                        <span className="nk-menu-icon"><em className="icon ni ni-tile-thumb"></em></span>
                                        <span className="nk-menu-text">Web Services</span>
                                    </a>
                                    <ul className="nk-menu-sub">
                                        <li className="nk-menu-item">
                                            <a href="html/project-card.html" className="nk-menu-link"><span className="nk-menu-text">View web services requests</span></a>
                                        </li>
                                        <li className="nk-menu-item">
                                            <a href="html/project-list.html" className="nk-menu-link"><span className="nk-menu-text">Active web services</span></a>
                                        </li>
                                    </ul>
                                    {/* <!-- .nk-menu-sub --> */}
                                </li>

                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-item">
                                    <a href="html/index-crypto.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-bitcoin-cash"></em></span>
                                        <span className="nk-menu-text">Legal Request</span>
                                    </a>
                                </li>
                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-item">
                                    <a href="html/index-analytics.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-growth"></em></span>
                                        <span className="nk-menu-text">Subscriptions</span>
                                    </a>
                                </li>
                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-item">
                                    <a href="html/index-invest.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-coins"></em></span>
                                        <span className="nk-menu-text">Pricing Plans</span>
                                    </a>
                                </li>
                            
                                {/* <!-- .nk-menu-item --> */}
                                
                               
                             
                             
                                {/* <!-- .nk-menu-item --> */}
                                <li className="nk-menu-item">
                                    <a href="html/email-templates.html" className="nk-menu-link">
                                        <span className="nk-menu-icon"><em className="icon ni ni-text-rich"></em></span>
                                        <span className="nk-menu-text">LogOut</span>
                                    </a>
                                </li>
                            </ul>
                            {/* <!-- .nk-menu --> */}
                        </div>
                        {/* <!-- .nk-sidebar-menu --> */}
                    </div>
                    {/* <!-- .nk-sidebar-content --> */}
                </div>
                {/* <!-- .nk-sidebar-element --> */}
            </div>
            {/* <!-- sidebar @e --> */}
            {/* <!-- wrap @s --> */}
            <div className="nk-wrap ">
                {/* <!-- main header @s --> */}
                <div className="nk-header nk-header-fixed is-light">
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-menu-trigger d-xl-none ml-n1">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                            </div>
                            <div className="nk-header-brand d-xl-none">
                                <a href="html/index.html" className="logo-link">
                                    <img className="logo-light logo-img" src="./images/logo.png" srcset="./images/logo2x.png 2x" alt="logo"/>
                                    <img className="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/logo-dark2x.png 2x" alt="logo-dark"/>
                                </a>
                            </div>
                            {/* <!-- .nk-header-brand --> */}
                            <div className="nk-header-news d-none d-xl-block">
                                
                            </div>
                            {/* <!-- .nk-header-news --> */}
                            <div className="nk-header-tools">
                                <ul className="nk-quick-nav">
                                    
                                   {/* admin profile */}
                                   <MiniProfile/>
                                    {/* this is notification */}
                                    <NotificationList/>
                               
                                </ul>
                                {/* <!-- .nk-quick-nav --> */}
                            </div>
                            {/* <!-- .nk-header-tools --> */}
                        </div>
                        {/* <!-- .nk-header-wrap --> */}
                    </div>
                    {/* <!-- .container-fliud --> */}
                </div>
                {/* <!-- main header @e --> */}
                {/* <!-- content @s --> */}
                <Outlet/>
                {/* <!-- content @e --> */}
                {/* <!-- footer @s --> */}
                <div className="nk-footer">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright"> &copy; {new Date().getFullYear()} STATA <a href="https://softnio.com" target="_blank">Link</a>
                            </div>
                            <div className="nk-footer-links">
                                <ul className="nav nav-sm">
                                    <LangSelect/>
                                    <li className="nav-item">
                                        <a href="#" data-toggle="modal" data-target="#region" className="nav-link"><em className="icon ni ni-globe"></em><span className="ml-1">Select Region</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer @e --> */}
            </div>
            {/* <!-- wrap @e --> */}
        </div>
        {/* <!-- main @e --> */}
    </div>
    {/* <!-- app-root @e --> */}
    {/* <!-- select region modal --> */}
    <CountrySelect/>
    {/* <!-- .modal --> */}
 
</div>

    </>
  );
}

export default Sidebar;
