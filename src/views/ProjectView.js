import React from 'react'
import styles from 'styles/components/_project.scss'

export class ProjectView extends React.Component {
  render () {
    return (
      <div className={styles['Project']}>
        <img className={styles['Project__logo']} src='/logo.png'/>
        <h2 className={styles['Project__title']}>The Cardenal</h2>
        <p className={styles['Project__description']}>Description the El Cardenal</p>
        <h3 className={styles['Project__subtitle']}>Integrantes</h3>
        <h3 className={styles['Project__subtitle']}>Tecnologías</h3>
      </div>
    )
  }
}

export default ProjectView
