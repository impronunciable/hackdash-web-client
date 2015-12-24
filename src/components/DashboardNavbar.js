import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import styles from 'styles/components/_dashboard-header.scss'

// Module constants
const ActiveStyle = styles['DashboardHeader__active']
const AvatarStyle = styles['DashboardHeader__avatar']

export default class DashboardNavbar extends Component {
  static propTypes = {
    user: PropTypes.object,
    dashboard: PropTypes.object,
    onLoginClick: PropTypes.func.isRequired,
    dashboard_id: PropTypes.string.isRequired
  }

  render () {
    const { user, dashboard_id, onLoginClick } = this.props
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li><Link to={`/dashboards/${dashboard_id}`} activeClassName={ActiveStyle}>Dashboard</Link></li>
        <li><Link to={`/dashboards/${dashboard_id}/about`} activeClassName={ActiveStyle}>About</Link></li>
        { user ? <li><Link to='/users/{user.id}'>
          <img src={user.picture} alt={user.email} className={`img-circle ${AvatarStyle}`} /></Link></li> : null }
        { !user ? <li><a href='#' onClick={onLoginClick}>Login</a></li> : null }
      </ul>
    )
  }
}
