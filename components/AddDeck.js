import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { handleAddDeck } from '../actions'

class AddDeck extends Component {
  state = {
    title: ''
  }
  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name

    this.setState(() => ({
      [name]: value
    }))
  }
  handleSubmit = () => {
    const { title } = this.state
    const { navigation } = this.props

    handleAddDeck(title)

    this.setState({
      title: ''
    })

    navigation.navigate('DeckDetails', { title })
  }
  render () {
    return (
      <KeyboardAvoidingView behavior='height'>
        <View>
          <TextInput 
            placeholder='Deck Title' 
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

export default connect()(AddDeck)