import React, { useState } from "react"
import Sidebar from "./components/Sidebar"
import DashboardNavbar from "./components/DashboardNavbar"
import "./styles/index.scss"

function App() {
  const [sidebarActive, setSidebarActive] = useState(false)

  return (
    <div className="dashboard-container">
      <Sidebar sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />
      <DashboardNavbar setSidebarActive={setSidebarActive} />
      <main className="dashboard-content-container">
        <div className="heading-container">
          <div className="heading-text">Gigs</div>
          <div className="button">
            <span>New Gig</span>
            <i className="far fa-plus" />
          </div>
        </div>

        <div className="table-toggle-container">
          <div className="table-toggle-button active" data-number="3404">All gigs</div>
          <div className="table-toggle-button" data-number="1200">My gigs</div>
          <div className="table-toggle-button" data-number="100">Rejected gigs</div>
        </div>
      </main>
    </div>
  )
}

export default App;
