import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Deck from './Deck'

class DeckDetails extends Component {
  render () {
    const { navigation } = this.props
    
    return (
      <View>
        <Text>DeckDetails</Text>
        <Deck />
        <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetails