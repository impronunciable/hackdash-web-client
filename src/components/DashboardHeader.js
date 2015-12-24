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
    dashboard_id: PropTypes.string.isRequired
  }

  render () {
    const { user, dashboard_id } = this.props
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>HackDash</Link>
          </div>
          <DashboardNavbar
            user={user}
            dashboard_id={dashboard_id}
            onLoginClick={this.onLoginClick.bind(this)} />
        </div>
      </nav>
    )
  }

  componentDidMount () {
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
