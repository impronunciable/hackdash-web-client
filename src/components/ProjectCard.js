import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

// Constants
const cardClassName = 'col-xs-12 col-md-3'

export default class ProjectCard extends Component {
  static propTypes = {
    dashboard_slug: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired
  }

  render () {
    const { project, dashboard_slug } = this.props
    return (
      <Link
        to={`/dashboards/${dashboard_slug}/projects/${project.id}`}
        className={cardClassName}>
        <div>
          <img src={project.cover} />
        </div>
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </Link>
    )
  }
}
