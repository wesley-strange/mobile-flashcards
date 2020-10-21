import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

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

function mapStateToProps({ decks }, { title }) {
  const numQuestions = decks ? decks[title].questions.length : 0

  return {
    title,
    numQuestions
  }
}

export default connect(mapStateToProps)(Deck)