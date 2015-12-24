import React from 'react'
import 'styles/core.scss'
import DashboardHeader from 'components/DashboardHeader'

function DashboardLayout ({ children, params }) {
  return (
    <div className='container'>
      <DashboardHeader dashboard_slug={params.dashboard_slug} />
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

DashboardLayout.propTypes = {
  children: React.PropTypes.element,
  params: React.PropTypes.object
}

export default DashboardLayout
