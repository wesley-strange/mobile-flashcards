import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
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
      <KeyboardAvoidingView behavior='height'>
        <View>
          <TextInput 
            placeholder='Question' 
            onChangeText={this.handleQuestionText}
          />
          <TextInput 
            placeholder='Answer' 
            onChangeText={this.handleAnswerText}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)