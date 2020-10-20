import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Deck from './Deck'
import { handleInitialData } from './../actions'

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <View>
        <Text>DeckList</Text>
        <Deck navigation={this.props.navigation} />
      </View>
    )
  }
}

export default connect()(DeckList)