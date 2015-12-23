import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import DashboardNavbar from 'components/DashboardNavbar'
import { actions as userActions } from '../redux/modules/user'
import { auth0_client_id, auth0_domain } from 'config'

const mapStateToProps = (state) => ({
  user: state.user,
  dashboard: state.dashboard
})

class DashboardHeader extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  render () {
    const { user } = this.props
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>HackDash</Link>
          </div>
          <DashboardNavbar
            user={user}
            onLoginClick={this.onLoginClick.bind(this)} />
        </div>
      </nav>
    )
  }

  onLoginClick () {
    const { login } = this.props
    login(auth0_client_id, auth0_domain)
  }
}

export default connect(mapStateToProps, userActions)(DashboardHeader)
