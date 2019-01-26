import { FETCH_POST, NEW_POSTS } from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        // items: [...state.items, action.payload]
        ...state,
        items: action.payload
      }
    case NEW_POSTS:
    return {
      // items: [...state.items, action.payload]
      ...state,
      item: action.payload
    }
    default:
      return state
  }
}