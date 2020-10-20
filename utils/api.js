
import AsyncStorage from '@react-native-community/async-storage'
import { decks } from './_DATA'

const STORAGE_KEY = 'MOBILE_FLASHCARDS:deck'

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((data) => {
      return data === null 
        ? AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks)) 
        : JSON.parse(data)
    })
}

export function getDeck(id) {
  try {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => JSON.parse(data)[id])
  } catch (error) {
    console.log(`Error while trying to get the deck with ID ${id}: ${error}`)
  }
}

export function newDeck(title) {
  try {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    }))
  } catch (error) {
    console.log(`Error while trying to save the deck with title ${title}: ${error}`);
  }
}

export function newCard(title, card) {
  try {
    return getDeck(title)
      .then((deck) => {
        AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
          [title]: {
            questions: [
              ...deck.questions,
              {...card }
            ]
          }
        }))
      })
  } catch (error) {
    console.log(`Error while trying to save the card ${card} into the deck ${title}: ${error}`);
  }
}

export function deleteDeck(title) {
  try {
    return AsyncStorage.getItem(STORAGE_KEY)
      .then((results) => {
        const data = JSON.parse(results)
        data[title] = undefined
        delete data[title]
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      })
  } catch (error) {
    console.log(`Error while trying to remove the deck ${title}: ${error}`);
  }
}