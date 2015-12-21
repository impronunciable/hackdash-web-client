import React, { Component } from 'react'
import { Link } from 'react-router'

export default class HomeView extends Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>HackDash</h1>
        <hr />
        <ul>
          <li><Link to='/dashboards/1'>Dashboard View</Link></li>
          <li><Link to='/dashboards/1/projects/1'>Project View</Link></li>
        </ul>
      </div>
    )
  }
}
