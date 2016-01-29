import React, { PropTypes, Component } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from 'styles/components/_dashboard-header.scss'

// Module constants
const ActiveStyle = styles['DashboardHeader__active']
const AvatarStyle = styles['DashboardHeader__avatar']

export default class DashboardNavbar extends Component {
  static propTypes = {
    user: PropTypes.object,
    onLoginClick: PropTypes.func.isRequired,
    dashboard_slug: PropTypes.string.isRequired
  };

  render () {
    const { user, dashboard_slug, onLoginClick } = this.props
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li><IndexLink to={`/dashboards/${dashboard_slug}`} activeClassName={ActiveStyle} className={styles['DashboardHeader__link']}>Dashboard</IndexLink></li>
        <li><Link to={`/dashboards/${dashboard_slug}/about`} activeClassName={ActiveStyle} className={styles['DashboardHeader__link']}>About</Link></li>
        { user ? <li><Link to={`/dashboards/${dashboard_slug}/projects/create`} activeClassName={ActiveStyle} className={styles['DashboardHeader__link']}>Create project</Link></li> : null }
        { user ? <li><Link to='/users/me'>
          <img src={user.picture} alt={user.email} className={`img-circle ${AvatarStyle}`} /></Link></li> : null }
        { !user ? <li><a href='#' onClick={onLoginClick}>Login</a></li> : null }
      </ul>
    )
  }
}
