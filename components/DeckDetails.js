import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Deck from './Deck'
import { handleRemoveDeck } from '../actions'

class DeckDetails extends Component {
  deleteDeck = () => {
    const { navigation, route } = this.props
    const { title } = route.params

    handleRemoveDeck(title)

    navigation.navigate('Home')
  }
  render () {
    const { navigation, route } = this.props
    const { title, numQuestions } = route.params

    return (
      <View>
        <Deck title={title} numQuestions={numQuestions} />
        <TouchableOpacity onPress={() => navigation.navigate('AddCard', { title })}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quiz', { title })}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.deleteDeck}>
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DeckDetails