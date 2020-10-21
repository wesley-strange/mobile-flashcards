import { showLoading, hideLoading } from "react-redux-loading"
import { getDecks, newDeck, newCard, deleteDeck } from "../utils/api"

export const RECEIVE_DATA = 'RECEIVE_DATA'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DATA,
    decks
  }
}

export function addDeck(deckTitle) {
  return {
    type: ADD_DECK,
    deckTitle
  }
}

export function addCard(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}

export function removeDeck(deckTitle) {
  return {
    type: REMOVE_DECK,
    deckTitle
  }
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddDeck(title) {
  return (dispatch) => {
    dispatch(showLoading())
    return newDeck(title)
      .then(() => dispatch(addDeck(title)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddCard(title, card) {
  return (dispatch) => {
    dispatch(showLoading())
    return newCard(title, card)
      .then(() => {
        dispatch(addCard(title, card))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleRemoveDeck(title) {
  return (dispatch) => {
    dispatch(showLoading())
    return deleteDeck(title)
      .then(() => {
        dispatch(removeDeck(title))
      })
      .then(() => dispatch(hideLoading()))
  }
}