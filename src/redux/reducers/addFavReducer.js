import { ADD_FAV } from '../actions/actionTypes'

const initialState = {
  favs : []
}

export const addFavReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, action.fav]
      };
      default:
        return state;
  }
} 