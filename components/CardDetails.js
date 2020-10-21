import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class CardDetails extends Component {
  render () {
    const { question, currentQuestion, questions, showAnswer, handleAnswer, handleShowAnswer } = this.props

    return (
      <View>
        <Text>{currentQuestion + 1} / {questions.length}</Text>
        { !showAnswer 
          ? (
            <View>
              <Text>{question.question}</Text>
              <TouchableOpacity onPress={handleShowAnswer}>
                <Text>Show Answer</Text>
              </TouchableOpacity>
            </View>
          )
          : (
            <View>
              <Text>{question.answer}</Text>
              <TouchableOpacity onPress={handleShowAnswer}>
                <Text>Show Question</Text>
              </TouchableOpacity>
            </View>
          )
        }
        <TouchableOpacity onPress={() => handleAnswer('correct')}>
          <Text>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnswer('incorrect')}>
          <Text>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default CardDetails