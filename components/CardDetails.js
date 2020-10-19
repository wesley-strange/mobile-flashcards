import React, { Component } from 'react'
import { View, Text } from 'react-native'

class CardDetails extends Component {
  render () {
    return (
      <View>
        <Text>CardDetails</Text>
        <Text>Question number</Text>
        <Text>Question text</Text>
        <Text>Question/Answer toggle</Text>
        <Text>Correct button</Text>
        <Text>Incorrect button</Text>
      </View>
    )
  }
}

export default CardDetails