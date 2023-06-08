import React from 'react'
import Sidebarcomp from '../components/dashboard/Sidebarcomp'
import Midpage from '../components/dashboard/Midpage'

const Dashboard = () => {
  return (
    <div>
        <Sidebarcomp>
           <Midpage/>
        </Sidebarcomp>
    </div>
  )
}

export default Dashboard