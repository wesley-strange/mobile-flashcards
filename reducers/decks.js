import { RECEIVE_DATA, ADD_CARD, ADD_DECK, REMOVE_DECK } from "../actions"

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.decks
      }

    case ADD_CARD:
      const { deckTitle, card } = action;
      return {
        ...state,
        [deckTitle]: {
          ...state[deckTitle],
          questions: [
            ...state[deckTitle].questions,
            {...card }
          ]
        }
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          questions: []
        }
      }
    case REMOVE_DECK:
      return Object.assign({},
        ...Object.entries(state)
        .filter(([title]) => title !== action.deckTitle)
        .map(([title, value]) => ({
          [title]: value
        }))
      )
    default:
      return state
  }
}

export default decks