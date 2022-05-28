import React, { Component } from 'react'
import Creatlist from './Component/Creatlist'
import List from './Component/List'

export default class App extends Component {

  render() {
    return (
      <div>
        <Creatlist/>
        <List/>
      </div>
    )
  }
}

