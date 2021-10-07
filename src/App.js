import React, { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar"
import DashboardNavbar from "./components/DashboardNavbar"
import "./styles/index.scss"
import CustomTable from "./components/CustomTable"
import { getUsers } from "./store/app"
import { useDispatch } from "react-redux"

function App() {
  const [sidebarActive, setSidebarActive] = useState(false)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  async function _getUsers() {
    const { error, data } = await dispatch(getUsers())
    if (error) {
      console.log(error)
    } else if (data) {
      setUsers(data)
    }
    setLoading(false)
  }

  useEffect(() => {
    _getUsers()
    // eslint-disable-next-line
  }, [])

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

        <div className="filter-buttons-container">
          <div className="filter-button">
            <span>Freelance</span>
          </div>
          <div className="filter-button">
            <i className="fa fa-arrows-alt" />
            <span>Keywords</span>
            <i className="fa fa-chevron-down" />
          </div>
          <div className="filter-button">
            <i className="fal fa-map-marker-alt" />
            <span>Location</span>
          </div>
          <div className="filter-button">
            <i className="fal fa-globe" />
            <span>Remote Friendly</span>
          </div>
          <div className="filter-button active">
            <i class="far fa-palette"></i>
            <span>Design</span>
            <i class="far fa-check"></i>
          </div>
          <div className="filter-button">
            <i className="fa fa-suitcase" />
            <span>Contract</span>
          </div>
        </div>

        <CustomTable data={users} loading={loading} headers={["Role", "Company", "Date", "Salary"]} />
      </main>
    </div>
  )
}

export default App;
