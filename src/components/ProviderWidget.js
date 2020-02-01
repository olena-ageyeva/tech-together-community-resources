import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './ProviderWidget.scss'

export default class ProviderWidget extends Component {
  renderExtras = () => {
    const {
      streetaddress1,
      streetaddress2,
      city,
      usState,
      zipcode
    } = this.props
    return (
      <div className='extras'>
        <div className='extra'>
          <Icon name='address book' style={{ marginRight: '5px' }}/>
          <div>
            <div>{ streetaddress1 }</div>
            <div>{ streetaddress2 }</div>
            <div>{ city }</div>
            <div>{ usState.slice(0, 2) } { zipcode }</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {
      name,
      description,
      onClick,
      type
    } = this.props

    return (
      <div className='provider-widget'>
        <Card
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfoFVkWUnGBCb2pIw2aOMAFFWoczy-q1ssUUHtoAqa0vlZJl7NKg&s'
          header={ name }
          meta={ type }
          description={ description }
          extra={ this.renderExtras() }
          onClick={ onClick }
        />
      </div>
    )
  }
}