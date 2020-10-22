import React, { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { handleAddDeck } from '../actions'
import { gray, white, blue } from '../utils/colors'

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
      <KeyboardAvoidingView behavior='height' style={styles.container}>
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder='Deck Title' 
            onChangeText={this.handleChange}
          />
          <TouchableOpacity onPress={this.handleSubmit} style={styles.submitBtn}>
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

export default connect()(AddDeck)