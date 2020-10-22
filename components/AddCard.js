import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { white, blue, gray } from '../utils/colors'
import { handleAddCard } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleQuestionText = (question) => {
    this.setState(() => ({
      question
    }))
  }
  handleAnswerText = (answer) => {
    this.setState(() => ({
      answer
    }))
  }
  handleSubmit = () => {
    const { question, answer } = this.state
    const { route, navigation, dispatch } = this.props
    const { title } = route.params

    const card = {
      question,
      answer
    }

    dispatch(handleAddCard(title, card))

    this.setState({
      question: '',
      answer: ''
    })

    navigation.navigate('DeckDetails', { title })
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='height' style={styles.container}>
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder='Question' 
            onChangeText={this.handleQuestionText}
          />
          <TextInput 
            style={styles.textInput}
            placeholder='Answer' 
            onChangeText={this.handleAnswerText}
          />
          <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    backgroundColor: white,
    borderWidth: 1,
    borderColor: gray,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  submitBtn: {
    backgroundColor: blue,
    padding: 10,
    alignItems: 'center',
  },
  submitText: {
    color: white,
    fontSize: 20,
  }
})

export default connect()(AddCard)