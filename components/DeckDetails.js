import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Deck from './Deck'
import { blue, white } from '../utils/colors'
import { handleRemoveDeck } from '../actions'

class DeckDetails extends Component {
  deleteDeck = () => {
    const { navigation, route, dispatch } = this.props
    const { title } = route.params

    dispatch(handleRemoveDeck(title))

    navigation.navigate('Home')
  }
  render () {
    const { navigation, route } = this.props
    const { title } = route.params

    return (
      <View style={styles.container}>
        <Deck title={title} />
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddCard', { title })}>
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Quiz', { title })}>
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.deleteDeck}>
          <Text style={styles.btnText}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btn: {
    backgroundColor: blue,
    padding: 25,
    alignItems: 'center',
    margin: 15,
  },
  btnText: {
    color: white,
    fontSize: 20,
  }
})

export default connect()(DeckDetails)