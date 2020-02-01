import React, { Component } from 'react'

export default class ProviderScreen extends Component {
  render() {
    return (
      <div className='provider-screen' onSubmit={ this.submitForm }>
        Provider Information
      </div>
    )
  }
}