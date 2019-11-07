import { LOAD_COUNTRIES } from '../actions/actionTypes'

const initialState = {
  countries : []
}

export const setCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COUNTRIES:
      return {
        ...state,
        countries: action.countries
      };
      default:
        return state;
  }
} 