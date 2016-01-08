import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as projectActions } from 'redux/modules/project'
import ProjectForm from 'components/ProjectForm'

const mapStateToProps = (state) => ({
  user: state.user
})

class ProjectCreateView extends Component {
  static propTypes = {
    user: PropTypes.object,
    params: PropTypes.object.isRequired,
    createProject: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  render () {
    return (
      <ProjectForm onSubmit={this._onSubmit.bind(this)} />
    )
  }

  _onSubmit (data) {
    const { createProject, user, params, history } = this.props
    data.dashboard_slug = params.dashboard_slug
    createProject(data, user.idToken)
    .then(() => history.push(`/dashboards/${params.dashboard_slug}`))
  }
}

export default connect(mapStateToProps, projectActions)(ProjectCreateView)
