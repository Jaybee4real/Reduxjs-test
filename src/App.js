import Sidebar from "./components/Sidebar"
import DashboardNavbar from "./components/DashboardNavbar"
import "./styles/index.scss"

function App() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <DashboardNavbar />
    </div>
  )
}

export default App;
