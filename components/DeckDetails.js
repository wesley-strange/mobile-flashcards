import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Deck from './Deck'

class DeckDetails extends Component {
  render () {
    return (
      <View>
        <Text>DeckDetails</Text>
        <Deck />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetails