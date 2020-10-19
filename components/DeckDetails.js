import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Deck from './Deck'

class DeckDetails extends Component {
  render () {
    return (
      <View>
        <Text>DeckDetails</Text>
        <Deck />
        <Text>Add card button</Text>
        <Text>Start quiz button</Text>
        <Text>Delete deck button</Text>
      </View>
    )
  }
}

export default DeckDetails