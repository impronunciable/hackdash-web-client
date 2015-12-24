import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import DashboardNavbar from 'components/DashboardNavbar'
import { actions as userActions } from '../redux/modules/user'

const mapStateToProps = (state) => ({
  user: state.user,
  dashboard: state.dashboard
})

class DashboardHeader extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    fetchProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
    dashboard_slug: PropTypes.string.isRequired
  }

  render () {
    const { user, dashboard_slug } = this.props
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>HackDash</Link>
          </div>
          <DashboardNavbar
            user={user}
            dashboard_slug={dashboard_slug}
            onLoginClick={this.onLoginClick.bind(this)} />
        </div>
      </nav>
    )
  }

  componentWillMount () {
    const { fetchProfile, user } = this.props
    const idToken = localStorage.getItem('userToken')
    if (idToken && !user) {
      fetchProfile(idToken)
    }
  }

  onLoginClick () {
    const { login } = this.props
    login()
  }
}

export default connect(mapStateToProps, userActions)(DashboardHeader)
