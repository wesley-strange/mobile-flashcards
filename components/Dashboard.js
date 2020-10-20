import React, { Component } from 'react'
import { View, Text } from 'react-native'
import DeckList from './DeckList'

class Dashboard extends Component {
  render () {
    return (
      <View>
        <Text>Dashboard</Text>
        <DeckList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Dashboard