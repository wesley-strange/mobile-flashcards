import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { handleAddDeck } from '../actions'

class AddDeck extends Component {
  state = {
    title: ''
  }
  handleChange = (title) => {
    this.setState(() => ({
      title
    }))
  }
  handleSubmit = () => {
    const { title } = this.state
    const { navigation, dispatch } = this.props

    dispatch(handleAddDeck(title))

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
            onChangeText={this.handleChange}
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