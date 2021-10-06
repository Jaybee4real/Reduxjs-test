import React from 'react'
import '../styles/sidebar.scss'

export default function Sidebar({ sidebarActive, setSidebarActive }) {
    return (
        <div className={`sidebar-container ${sidebarActive ? "active" : ""}`}>
            <div className="logo"></div>
            <i className="far fa-times sidebar-toggle" onClick={() => setSidebarActive(false)}></i>
            <div className="sidebar-item active"><i className="fa fa-home" /><span>Dashboard</span></div>
            <div className="sidebar-item"><i className="fa fa-suitcase" /><span>Gigs</span></div>
            <div className="sidebar-item"><i className="fa fa-folder" /><span>Company</span></div>
            <div className="sidebar-item"><i className="fa fa-user" /><span>Account</span></div>
        </div>
    )
}
