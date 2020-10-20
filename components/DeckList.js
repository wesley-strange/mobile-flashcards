import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import Deck from './Deck'
import { handleInitialData } from './../actions'

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render () {
    const { deckList, navigation } = this.props
    return (
      <View>
        {deckList && deckList.length !== 0
          ? (
            <FlatList 
              data={deckList}
              keyExtractor={(item) => item.deck}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('DeckDetails', {
                    title: item.deck,
                    numQuestions: item.numQuestions
                  })}
                >
                  <Deck title={item.deck} numQuestions={item.numQuestions} />
                </TouchableOpacity>
              )}
            />
          )
          : (
            <Text>There are no decks.</Text>
          )}
      </View>
    )
  }
}

function mapStateToProps({ decks }, { navigation }) {
  const deckList = Object.keys(decks).map((deck) => ({
    deck,
    numQuestions: decks[deck].questions.length
  }))
  
  return {
    deckList,
    navigation
  }
}

export default connect(mapStateToProps)(DeckList)