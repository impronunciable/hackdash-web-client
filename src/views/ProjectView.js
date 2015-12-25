import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as projectActions } from 'redux/modules/project'
import styles from 'styles/components/_project.scss'

const mapStateToProps = (state) => ({
  project: state.project
})

class ProjectView extends Component {
  static propTypes = {
    project: PropTypes.object,
    params: PropTypes.object.isRequired,
    fetchProject: PropTypes.func.isRequired
  }

  render () {
    const { project } = this.props
    if (project) {
      return (
        <div className={styles['Project']}>
          <img className={styles['Project__logo']} src={project.cover} />
          <h2 className={styles['Project__title']}>{project.title}</h2>
          <p className={styles['Project__description']}>{project.description}</p>
          <h3 className={styles['Project__subtitle']}>Project followers</h3>
          <h3 className={styles['Project__subtitle']}>Tecnologías</h3>
        </div>
      )
    } else {
      return (<p>Loading...</p>)
    }
  }

  componentWillMount () {
    const { params, fetchProject } = this.props
    fetchProject(params.project_id)
  }
}

export default connect(mapStateToProps, projectActions)(ProjectView)
