import React, { Component } from 'react'
import { View, Text } from 'react-native'

class ErrorMessage extends Component {
  render () {
    return (
      <View>
        <Text>ErrorMessage</Text>
        <Text>Sorry, you cannot take a quiz because there are no flashcards in the deck.</Text>
      </View>
    )
  }
}

export default ErrorMessage