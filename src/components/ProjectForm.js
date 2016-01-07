import React, { PropTypes, Component } from 'react'

export default class ProjectForm extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    const { title, description, link } = props
    this.state = { title, description, link }
  }

  componentDidMount () {
  }

  render () {
    const { title, description, link } = this.state
    return (
      <div className='col-xs-12 col-md-8 col-md-push-2'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' className='form-control' id='title' value={title} onChange={this._handleChange.bind(this, 'title')} />
        </div>
        <div className='form-group'>
          <textarea rows='3' className='form-control' placeholder='Description' value={description} id='description' onChange={this._handleChange.bind(this, 'description')}></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='link'>link</label>
          <input type='text' className='form-control' value={link} id='link' onChange={this._handleChange.bind(this, 'link')} />
        </div>
        <button className='btn btn-primary' onClick={this._onClick.bind(this)}>Submit</button>
      </div>
    )
  }

  _handleChange (name, evt) {
    this.setState({
      [name]: evt.target.value
    })
  }

  _onClick () {
    const { onSubmit } = this.props
    onSubmit(this.state)
  }
}
