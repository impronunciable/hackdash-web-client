import React, { Component } from 'react'
import { Link } from 'react-router'
import DashboardNavbar from 'components/DashboardNavbar'

export default class DashboardHeader extends Component {
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>HackDash</Link>
          </div>
          <DashboardNavbar />
        </div>
      </nav>
    )
  }
}
