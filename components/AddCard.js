import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCard } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }
  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
  }
  handleSubmit = () => {
    const { question, answer } = this.state
    const { route, navigation } = this.props
    const { title, numQuestions } = route.params

    const card = {
      question,
      answer
    }

    handleAddCard(title, card)

    this.setState({
      question: '',
      answer: ''
    })

    navigation.navigate('DeckDetails', {
      title,
      numQuestions: numQuestions + 1
    })
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='height'>
        <View>
          <TextInput 
            placeholder='Question' 
            onChange={this.handleChange}
          />
          <TextInput 
            placeholder='Answer' 
            onChange={this.handleChange}
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