import React from 'react'
import Sidebarcomp from '../components/dashboard/Sidebarcomp'
import Mainpage from '../components/dashboard/Mainpage'

const Dashboard = () => {
  return (
    <div>
        <Sidebarcomp>
          <Mainpage/>
        </Sidebarcomp>
    </div>
  )
}

export default Dashboard