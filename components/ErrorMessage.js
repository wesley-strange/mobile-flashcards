import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ErrorMessage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.errMsg}>Sorry, you can't take a quiz because there are no flashcards in the deck.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errMsg: {
    fontSize: 20,
    padding: 20,
  }
})

export default ErrorMessage