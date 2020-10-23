import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import Deck from './Deck'
import { gray, white } from '../utils/colors'
import { handleInitialData } from './../actions'

import { setLocalNotification } from '../utils/helpers'

class DeckList extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    setLocalNotification()
  }
  render () {
    const { deckList, navigation } = this.props
    return (
      <View style={styles.container}>
        {deckList && deckList.length !== 0
          ? (
            <FlatList 
              data={deckList}
              keyExtractor={(item) => item.deck}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.deckBtn}
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
            <Text style={styles.errMsg}>There are no decks to present.</Text>
          )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  deckBtn: {
    backgroundColor: white,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 10,
  },
  errMsg: {
    fontSize: 20,
    padding: 20,
  }
})

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