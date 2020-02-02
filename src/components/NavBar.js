import React, { Component } from 'react'
import './NavBar.scss'
export default class NavBar extends Component {
  state = {  }
  renderOptions = () => {
    const { history } = this.props
    return [
      {
        title: 'HOME',
        route: '/'
      },
      {
        title: 'PROVIDERS',
        route: '/providers'
      },
      {
        title: 'WOMEN',
        route: '/women'
      },
      {
        title: 'RESEACHERS',
        route: '/researchers'

      },
      {
        title: 'Log in',
        route: '/login'
      }
    ].map(o => {
      return (
        <div className='navbar__options' onClick={ () => history.push(o.route) }>
          { o.title }
        </div>
      )
    })
  }

  render() {
    return (
      <div className='navbar'>
        { this.renderOptions() }
      </div>
    )
  }
}