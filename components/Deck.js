import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render () {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails')}>
          <Text>Deck</Text>
        </TouchableOpacity>        
      </View>
    )
  }
}

export default Deck