import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as dashboardActions } from 'redux/modules/dashboard'
import { actions as userActions } from '../redux/modules/user'
import DashboardCreateForm from 'components/DashboardCreateForm'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, userActions, dashboardActions), dispatch)
}

class HomeView extends Component {
  static propTypes = {
    createDashboard: PropTypes.func.isRequired,
    user: PropTypes.object,
    fetchProfile: PropTypes.func.isRequired
  }

  render () {
    const { user } = this.props
    return (
      <div className='container text-center'>
        <h1>HackDash</h1>
        <hr />
        <ul>
          { user ? <li><DashboardCreateForm onSubmit={this._onSubmit.bind(this)} /></li> : '' }
          <li><Link to='/dashboards/chauasd'>Dashboard View</Link></li>
          <li><Link to='/dashboards/chauasd/projects/'>Project View</Link></li>
        </ul>
      </div>
    )
  }

  componentWillMount () {
    const { fetchProfile, user } = this.props
    const idToken = localStorage.getItem('userToken')
    if (idToken && !user) {
      fetchProfile(idToken)
    }
  }

  _onSubmit (title) {
    const { createDashboard, user } = this.props
    createDashboard(title, user.idToken)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
