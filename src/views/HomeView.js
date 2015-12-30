import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as dashboardActions } from 'redux/modules/dashboard'
import DashboardCreateForm from 'components/DashboardCreateForm'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class HomeView extends Component {
  static propTypes = {
    createDashboard: PropTypes.func.isRequired,
    user: PropTypes.object
  }

  render () {
    const { user } = this.props
    return (
      <div className='container text-center'>
        <h1>HackDash</h1>
        <hr />
        <ul>
          { user ? <li><DashboardCreateForm onSubmit={this._onSubmit.bind(this)} /></li> : '' }
          <li><Link to='/dashboards/1'>Dashboard View</Link></li>
          <li><Link to='/dashboards/1/projects/1'>Project View</Link></li>
        </ul>
      </div>
    )
  }

  _onSubmit (title) {
    const { createDashboard, user } = this.props
    createDashboard(title, user.idToken)
  }
}

export default connect(mapStateToProps, dashboardActions)(HomeView)
