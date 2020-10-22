import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { white, blue, red, orange } from '../utils/colors'

class CardDetails extends Component {
  render () {
    const { question, currentQuestion, questions, showAnswer, handleAnswer, handleShowAnswer } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.questionNum}>{currentQuestion + 1} / {questions.length}</Text>
        <View style={styles.questionContainer}>
          { !showAnswer 
            ? (
              <View>
                <Text style={styles.questionAnswer}>{question.question}</Text>
                <TouchableOpacity onPress={handleShowAnswer}>
                  <Text style={styles.showLink}>Show Answer</Text>
                </TouchableOpacity>
              </View>
            )
            : (
              <View>
                <Text style={styles.questionAnswer}>{question.answer}</Text>
                <TouchableOpacity onPress={handleShowAnswer}>
                  <Text style={styles.showLink}>Show Question</Text>
                </TouchableOpacity>
              </View>
            )
          }
          <TouchableOpacity style={styles.correctBtn} onPress={() => handleAnswer('correct')}>
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.incorrectBtn} onPress={() => handleAnswer('incorrect')}>
            <Text style={styles.btnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>        
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  questionContainer: {
    alignItems: 'center',
    padding: 30,
  },
  questionNum: {
    fontSize: 30,
  },
  questionAnswer: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 10,
  },
  showLink: {
    fontSize: 20,
    color: orange,
    textAlign: 'center',
  },
  correctBtn: {
    backgroundColor: blue,
    padding: 10,
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 10,
    width: 175,
  },
  incorrectBtn: {
    backgroundColor: red,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    width: 175,
  },
  btnText: {
    color: white,
    fontSize: 25,
  }
})

export default CardDetails