import { INCREMENT_FAV } from '../actions/actionTypes'

const initialState = {
  countFavs : 0
}

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_FAV:
      return {
        ...state,
        countFavs: action.countFavs + 1
      };
      default:
        return state;
  }
} 