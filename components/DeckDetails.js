import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Deck from './Deck'
import { handleRemoveDeck } from '../actions'

class DeckDetails extends Component {
  deleteDeck = () => {
    const { navigation, route, dispatch } = this.props
    const { title } = route.params

    dispatch(handleRemoveDeck(title))

    navigation.navigate('Home')
  }
  render () {
    const { navigation, route } = this.props
    const { title } = route.params

    return (
      <View>
        <Deck title={title} />
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

export default connect()(DeckDetails)