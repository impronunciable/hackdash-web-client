import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from 'styles/components/_dashboard-header.scss'

// Module constants
const ActiveStyle = styles['DashboardHeader__active']

export default class DashboardNavbar extends Component {
	render() {
		const { user, dashboard } = this.props
		return (
			<ul className="nav navbar-nav navbar-right">
				<li><Link to={`/dashboards/${dashboard}`} activeClassName={ActiveStyle}>Dashboard</Link></li>
				<li><Link to={`/dashboards/${dashboard}/about`} activeClassName={ActiveStyle}>About</Link></li>
				{ user ? <li><Link to="/users/{user.id}" activeClassName={ActiveStyle}>My Account</Link></li> : null }
				{ !user ? <li><Link to="/login" activeClassName={ActiveStyle}>Login</Link></li> : null }
				{ !user ? <li><Link to="/signup" activeClassName={ActiveStyle}>Sign Up</Link></li> : null }
			</ul>
		)
	}
}
