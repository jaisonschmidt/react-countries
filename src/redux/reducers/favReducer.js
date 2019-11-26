import { ADD_FAV, DEL_FAV } from "../actions/actionTypes";
import { defineState } from "redux-localstore";

const defaultState = {
  favs: []
};

const initialState = defineState(defaultState)("favReducer");

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, action.fav]
      };
    case DEL_FAV: {
      return {
        ...state,
        favs: state.favs.filter(
          fav => fav.numericCode !== action.fav.numericCode
        )
      };
    }
    default:
      return state;
  }
};
