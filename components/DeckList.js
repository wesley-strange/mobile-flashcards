import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Deck from './Deck'

class DeckList extends Component {
  render () {
    return (
      <View>
        <Text>DeckList</Text>
        <Deck navigation={this.props.navigation} />
      </View>
    )
  }
}

export default DeckList