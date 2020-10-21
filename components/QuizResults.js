import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class QuizResults extends Component {
  render () {
    const { numQuestions, correct, navigation } = this.props
    const percentage = ((correct / numQuestions) * 100).toFixed(0)
    
    return (
      <View>
        <Text>{correct} / {numQuestions} correct ({percentage}%)</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DeckDetails')}>
          <Text>Back to deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default QuizResults