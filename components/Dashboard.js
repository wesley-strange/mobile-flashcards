import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DeckList from './DeckList'

class Dashboard extends Component {
  render () {
    return (
      <View style={styles.container}>
        <DeckList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 20
  }
})