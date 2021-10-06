import React from 'react'
import "../styles/navbar.scss"

export default function DashboardNavbar() {
    return (
        <div className="dashboard-navbar-container">
            <i className="far fa-bars mobile-navbar-toggle"></i>
            <div className="input-container">
                <i className="fal fa-search" />
                <input placeholder="Search" />
            </div>

            <div className="right-side">
                <i className="far fa-bell" />
                <i className="far fa-envelope" />
                <i className="far fa-cog" />
                <div className="profile-picture">
                    <img src={require("../assets/images/profile_picture.png").default} alt="profile" />
                </div>
            </div>
        </div>
    )
}
