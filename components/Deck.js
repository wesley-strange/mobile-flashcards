import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

class Deck extends Component {
  render () {
    const { title, numQuestions, deckNotPresent } = this.props

    if (deckNotPresent) {
      return <Text>Removing...</Text>
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text> 
        <Text style={styles.questionsText}>{numQuestions} questions</Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
  },
  questionsText: {
    fontSize: 20,
    color: gray,
  }
})

function mapStateToProps({ decks }, { title }) {
  const deck = decks[title]

  if (!deck) return {deckNotPresent: true}
  const numQuestions = decks ? decks[title].questions.length : 0

  return {
    title,
    numQuestions,
    deckNotPresent: false,
  }
}

export default connect(mapStateToProps)(Deck)