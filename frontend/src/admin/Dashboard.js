import React from 'react'
import AdminSidebar from './AdminSidebar'

const Dashboard = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-md-4 ">
              <AdminSidebar home/>
            </div>
            <div className="col-md-8">
                <h1>Welcome to Dashboard</h1>
            </div>
        </div>
    </div>

    </>
  )
}

export default Dashboard