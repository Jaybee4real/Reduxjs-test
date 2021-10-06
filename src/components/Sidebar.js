import React from 'react'
import '../styles/sidebar.scss'

export default function Sidebar() {
    return (
        <div className="sidebar-container ">
            <div className="logo"></div>
            <div className="sidebar-item active"><i className="fa fa-home" /><span>Dashboard</span></div>
            <div className="sidebar-item"><i className="fa fa-suitcase" /><span>Gigs</span></div>
            <div className="sidebar-item"><i className="fa fa-folder" /><span>Company</span></div>
            <div className="sidebar-item"><i className="fa fa-user" /><span>Account</span></div>
        </div>
    )
}
