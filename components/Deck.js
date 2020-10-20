import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component {
  render () {
    const { title, numQuestions } = this.props

    return (
      <View>
        <Text>{title}</Text> 
        <Text>{numQuestions} questions</Text> 
      </View>
    )
  }
}

export default Deck